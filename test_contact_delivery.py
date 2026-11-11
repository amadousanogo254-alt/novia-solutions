import base64
import io
import json
import unittest
from unittest.mock import MagicMock, patch
from urllib.error import HTTPError, URLError

import server


class ContactDeliveryTests(unittest.TestCase):
    def setUp(self):
        self.client = server.app.test_client()
        self.fields = {
            "name": "Test",
            "email": "visitor@example.com",
            "phone": "123456789",
            "service": "Développement web",
            "subject": "Test",
            "message": "Message de test",
            "consent": "yes",
        }
        self.config = patch.multiple(
            server,
            CONTACT_EMAIL_PROVIDER="resend",
            RESEND_API_KEY="test-key",
            RESEND_FROM="onboarding@resend.dev",
            CONTACT_RECEIVER="owner@example.com",
            SITE_ORIGIN="",
        )
        self.config.start()
        self.addCleanup(self.config.stop)

    def test_resend_sends_validated_attachment_and_reply_to(self):
        captured = {}

        def fake_send(request, timeout):
            captured["payload"] = json.loads(request.data)
            captured["authorization"] = request.get_header("Authorization")
            return io.BytesIO(b'{"id":"test-id"}')

        fields = dict(self.fields, files=(io.BytesIO(b"%PDF-1.4\n%%EOF"), "test.pdf"))
        with patch.object(server, "urlopen", side_effect=fake_send):
            response = self.client.post("/api/contact-requests", data=fields)
        self.assertEqual(response.status_code, 201)
        self.assertTrue(response.json["sent"])
        payload = captured["payload"]
        self.assertEqual(payload["reply_to"], self.fields["email"])
        self.assertEqual(payload["to"], ["owner@example.com"])
        self.assertEqual(base64.b64decode(payload["attachments"][0]["content"]), b"%PDF-1.4\n%%EOF")
        self.assertEqual(captured["authorization"], "Bearer test-key")

    def test_api_failure_is_not_reported_as_success(self):
        errors = [
            HTTPError("https://api.resend.com/emails", 403, "Forbidden", {}, None),
            URLError("unavailable"),
        ]
        for error in errors:
            with self.subTest(error=type(error).__name__), patch.object(server, "urlopen", side_effect=error):
                response = self.client.post("/api/contact-requests", data=self.fields)
                self.assertEqual(response.status_code, 502)
                self.assertNotIn("sent", response.json)

    def test_missing_api_key_and_invalid_file_fail_before_sending(self):
        with patch.object(server, "RESEND_API_KEY", ""), patch.object(server, "urlopen") as send:
            response = self.client.post("/api/contact-requests", data=self.fields)
            self.assertEqual(response.status_code, 503)
            send.assert_not_called()
        fields = dict(self.fields, files=(io.BytesIO(b"invalid"), "test.pdf"))
        with patch.object(server, "urlopen") as send:
            response = self.client.post("/api/contact-requests", data=fields)
            self.assertEqual(response.status_code, 400)
            send.assert_not_called()

    def test_missing_identifier_is_failure(self):
        with patch.object(server, "urlopen", return_value=io.BytesIO(b"{}")):
            response = self.client.post("/api/contact-requests", data=self.fields)
        self.assertEqual(response.status_code, 502)

    def test_smtp_remains_available(self):
        mail_server = MagicMock()
        with patch.multiple(
            server,
            CONTACT_EMAIL_PROVIDER="smtp",
            SMTP_HOST="smtp.example.com",
            SMTP_USERNAME="sender@example.com",
            SMTP_PASSWORD="test-password",
        ), patch.object(server.smtplib, "SMTP") as smtp:
            smtp.return_value.__enter__.return_value = mail_server
            response = self.client.post("/api/contact-requests", data=self.fields)
        self.assertEqual(response.status_code, 201)
        mail_server.starttls.assert_called_once()
        mail_server.send_message.assert_called_once()


if __name__ == "__main__":
    unittest.main()
