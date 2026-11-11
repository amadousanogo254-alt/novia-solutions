from __future__ import annotations

import hmac
import base64
import io
import json
import os
import re
import secrets
import smtplib
import sqlite3
import ssl
import time as time_module
import zipfile
from contextlib import closing
from datetime import date, datetime, time, timedelta
from email.message import EmailMessage
from pathlib import Path
from threading import Lock
from zoneinfo import ZoneInfo, ZoneInfoNotFoundError
from urllib.error import HTTPError, URLError
from urllib.request import Request as URLRequest, urlopen

from flask import Flask, abort, jsonify, redirect, request, send_from_directory
from werkzeug.exceptions import RequestEntityTooLarge
from werkzeug.utils import secure_filename
from google.auth.exceptions import GoogleAuthError
from google.auth.transport.requests import Request as GoogleRequest
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from dotenv import load_dotenv


ROOT = Path(__file__).resolve().parent
APP_DATA = Path(os.environ.get("NOVIA_APP_DATA", Path.home() / ".novia-solutions"))
load_dotenv(APP_DATA / ".env")
TOKEN_FILE = Path(os.environ.get("GOOGLE_TOKEN_FILE", APP_DATA / "google-token.json"))
BOOKINGS_DB = Path(os.environ.get("NOVIA_BOOKINGS_DB", APP_DATA / "bookings.sqlite3"))
CLIENT_SECRETS_FILE = Path(os.environ.get("GOOGLE_CLIENT_SECRETS_FILE", ""))
CONNECT_KEY = os.environ.get("GOOGLE_CONNECT_KEY", "")
CALENDAR_ID = os.environ.get("GOOGLE_CALENDAR_ID", "primary")
CALENDAR_TIMEZONE = os.environ.get("GOOGLE_CALENDAR_TIMEZONE", "Europe/Paris")
SITE_ORIGIN = os.environ.get("SITE_ORIGIN", "")
PORT = int(os.environ.get("PORT", "8000"))
HOST = os.environ.get("NOVIA_HOST", "127.0.0.1")
CONTACT_RECEIVER = os.environ.get("CONTACT_RECEIVER", "noviasolutions0@gmail.com")
SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USERNAME = os.environ.get("SMTP_USERNAME", CONTACT_RECEIVER)
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD", "")
CONTACT_EMAIL_PROVIDER = os.environ.get("CONTACT_EMAIL_PROVIDER", "smtp").strip().lower()
RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "")
RESEND_FROM = os.environ.get("RESEND_FROM", "onboarding@resend.dev")
MAX_CONTACT_REQUEST_BYTES = 16 * 1024 * 1024
MAX_CONTACT_FILES = 5
MAX_CONTACT_FILES_BYTES = 12 * 1024 * 1024
ALLOWED_CONTACT_FILE_TYPES = {
    ".pdf": ("application", "pdf"),
    ".jpg": ("image", "jpeg"),
    ".jpeg": ("image", "jpeg"),
    ".png": ("image", "png"),
    ".docx": (
        "application",
        "vnd.openxmlformats-officedocument.wordprocessingml.document",
    ),
}

SCOPES = [
    "https://www.googleapis.com/auth/calendar.events",
    "https://www.googleapis.com/auth/calendar.freebusy",
]
SLOT_TIMES = (("09:00", "09:30"), ("10:30", "11:00"), ("14:00", "14:30"), ("16:00", "16:30"))
SERVICES = {
    "Stratégie digitale",
    "Développement web",
    "Accompagnement business",
    "Support & suivi",
}
CONTACT_SERVICES = SERVICES | {
    "Partenariat & accompagnement",
    "Achat et transport de véhicules",
    "Billetterie et voyage",
    "Formation en langue italienne",
    "Rendez-vous consulaire et regroupement familial",
    "Orientation des étudiants",
    "Comparabilité des diplômes",
    "Accompagnement à l’intégration",
    "Assistance et orientation administrative",
}
MEETING_TYPES = {"En ligne", "Téléphone", "Présentiel"}
EMAIL_PATTERN = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")
pending_oauth: dict[str, tuple[Flow, float]] = {}
booking_lock = Lock()

app = Flask(__name__, static_folder=None)
app.config["MAX_CONTENT_LENGTH"] = MAX_CONTACT_REQUEST_BYTES


@app.errorhandler(RequestEntityTooLarge)
def request_too_large(_error):
    return error_response("La demande dépasse la taille maximale autorisée.", 413)


def get_timezone() -> ZoneInfo:
    try:
        return ZoneInfo(CALENDAR_TIMEZONE)
    except ZoneInfoNotFoundError as error:
        raise RuntimeError("GOOGLE_CALENDAR_TIMEZONE doit être un fuseau horaire IANA valide.") from error


def configured() -> bool:
    return bool(CLIENT_SECRETS_FILE and CLIENT_SECRETS_FILE.is_file() and CONNECT_KEY)


def save_credentials(credentials: Credentials) -> None:
    TOKEN_FILE.parent.mkdir(parents=True, exist_ok=True)
    temporary_file = TOKEN_FILE.with_suffix(".tmp")
    temporary_file.write_text(credentials.to_json(), encoding="utf-8")
    try:
        temporary_file.chmod(0o600)
    except OSError:
        pass
    temporary_file.replace(TOKEN_FILE)


def load_credentials() -> Credentials | None:
    if not TOKEN_FILE.is_file():
        return None

    credentials = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)
    if credentials.expired and credentials.refresh_token:
        credentials.refresh(GoogleRequest())
        save_credentials(credentials)
    return credentials if credentials.valid else None


def calendar_service():
    credentials = load_credentials()
    if credentials is None:
        return None
    return build("calendar", "v3", credentials=credentials, cache_discovery=False)


def get_busy_periods(service, start: datetime, end: datetime) -> list[tuple[datetime, datetime]]:
    response = service.freebusy().query(
        body={
            "timeMin": start.isoformat(),
            "timeMax": end.isoformat(),
            "timeZone": CALENDAR_TIMEZONE,
            "items": [{"id": CALENDAR_ID}],
        }
    ).execute()
    calendar = response.get("calendars", {}).get(CALENDAR_ID, {})
    if calendar.get("errors"):
        raise RuntimeError("Google Calendar n'a pas pu lire les disponibilités de cet agenda.")

    busy_periods = []
    for period in calendar.get("busy", []):
        busy_start = datetime.fromisoformat(period["start"].replace("Z", "+00:00"))
        busy_end = datetime.fromisoformat(period["end"].replace("Z", "+00:00"))
        busy_periods.append((busy_start, busy_end))
    return busy_periods


def overlaps(start: datetime, end: datetime, busy_periods: list[tuple[datetime, datetime]]) -> bool:
    return any(start < busy_end and end > busy_start for busy_start, busy_end in busy_periods)


def error_response(message: str, status: int):
    return jsonify({"error": message}), status


@app.get("/")
def index():
    return send_from_directory(ROOT, "index.html")


@app.get("/<path:asset_path>")
def static_asset(asset_path: str):
    if asset_path.startswith(".") or asset_path in {"server.py", "requirements.txt", "GOOGLE_CALENDAR_SETUP.md"}:
        abort(404)

    allowed_extensions = {".html", ".css", ".js", ".jpg", ".jpeg", ".png", ".webp", ".svg", ".ico"}
    if Path(asset_path).suffix.lower() not in allowed_extensions:
        abort(404)
    return send_from_directory(ROOT, asset_path)


@app.get("/api/calendar/status")
def calendar_status():
    try:
        connected = load_credentials() is not None
    except (GoogleAuthError, OSError, ValueError):
        connected = False
    return jsonify({"configured": configured(), "connected": connected})


@app.post("/api/admin/google/connect-url")
def google_connect_url():
    authorization = request.headers.get("Authorization", "")
    supplied_key = authorization.removeprefix("Bearer ")
    if not CONNECT_KEY or not hmac.compare_digest(supplied_key, CONNECT_KEY):
        return error_response("Accès non autorisé.", 401)
    if not configured():
        return error_response("Configurez GOOGLE_CLIENT_SECRETS_FILE et GOOGLE_CONNECT_KEY avant de connecter Google.", 503)

    try:
        flow = Flow.from_client_secrets_file(
            str(CLIENT_SECRETS_FILE),
            scopes=SCOPES,
            redirect_uri=os.environ.get(
                "GOOGLE_REDIRECT_URI", f"http://localhost:{PORT}/auth/google/callback"
            ),
        )
    except (OSError, ValueError) as error:
        app.logger.warning("Google OAuth client configuration could not be loaded: %s", error)
        return error_response("Le fichier OAuth Google est illisible ou invalide.", 503)

    state = secrets.token_urlsafe(32)
    authorization_url, _ = flow.authorization_url(
        access_type="offline",
        include_granted_scopes="true",
        prompt="consent",
        state=state,
    )
    pending_oauth[state] = (flow, time_module.time() + 600)
    return jsonify({"authorizationUrl": authorization_url})


@app.get("/auth/google/callback")
def google_callback():
    state = request.args.get("state", "")
    pending = pending_oauth.pop(state, None)
    if not pending or pending[1] < time_module.time():
        return "Demande OAuth expirée ou invalide. Relancez la connexion depuis le serveur.", 400
    if request.args.get("error"):
        return "La connexion Google Calendar a été refusée. Vous pouvez fermer cette page.", 400

    flow = pending[0]
    try:
        flow.fetch_token(authorization_response=request.url)
        credentials = flow.credentials
        if not set(SCOPES).issubset(set(credentials.scopes or [])):
            return "Les autorisations Google Calendar nécessaires n'ont pas été accordées.", 403
        save_credentials(credentials)
    except (GoogleAuthError, OSError, ValueError) as error:
        app.logger.warning("Google OAuth callback failed: %s", error)
        return "La connexion Google Calendar a échoué. Vérifiez la configuration OAuth et réessayez.", 400

    return redirect("/appointment.html?google=connected#availabilityCalendar")


@app.get("/api/calendar/availability")
def calendar_availability():
    try:
        credentials = load_credentials()
    except (GoogleAuthError, OSError, ValueError) as error:
        app.logger.warning("Stored Google Calendar credentials could not be refreshed: %s", error)
        return error_response("La connexion Google Calendar doit être renouvelée.", 503)

    if credentials is None:
        return jsonify({
            "configured": configured(),
            "connected": False,
            "error": "L'agenda Google Calendar de NOVIA SOLUTIONS n'est pas encore connecté.",
        }), 503

    month_value = request.args.get("month", "")
    if not re.fullmatch(r"\d{4}-\d{2}", month_value):
        return error_response("Le mois demandé doit être au format AAAA-MM.", 400)

    try:
        month_start = date.fromisoformat(f"{month_value}-01")
        timezone = get_timezone()
        first_datetime = datetime.combine(month_start, time.min, tzinfo=timezone)
        next_month_start = date(month_start.year + (month_start.month == 12), month_start.month % 12 + 1, 1)
        end_datetime = datetime.combine(next_month_start, time.min, tzinfo=timezone)
        service = calendar_service()
        if service is None:
            return error_response("La connexion Google Calendar doit être renouvelée.", 503)
        busy_periods = get_busy_periods(service, first_datetime, end_datetime)
    except (RuntimeError, ValueError, ZoneInfoNotFoundError, HttpError, GoogleAuthError) as error:
        app.logger.warning("Google Calendar availability request failed: %s", error)
        return error_response("Les disponibilités Google Calendar sont momentanément indisponibles.", 502)

    days = []
    current_day = month_start
    while current_day < next_month_start:
        if current_day.weekday() < 5:
            available_slots = []
            for start_text, end_text in SLOT_TIMES:
                slot_start = datetime.combine(current_day, time.fromisoformat(start_text), tzinfo=timezone)
                slot_end = datetime.combine(current_day, time.fromisoformat(end_text), tzinfo=timezone)
                if slot_start > datetime.now(timezone) and not overlaps(slot_start, slot_end, busy_periods):
                    available_slots.append(f"{start_text} - {end_text}")
            if available_slots:
                days.append({"date": current_day.isoformat(), "slots": available_slots})
        current_day += timedelta(days=1)

    return jsonify({"configured": True, "connected": True, "timeZone": CALENDAR_TIMEZONE, "days": days})


def validate_contact_attachment(filename: str, content: bytes) -> tuple[str, str]:
    extension = Path(filename).suffix.lower()
    content_type = ALLOWED_CONTACT_FILE_TYPES.get(extension)
    if content_type is None:
        raise ValueError("Formats autorisés : PDF, JPG, PNG et DOCX.")
    if not content:
        raise ValueError("Un des fichiers joints est vide.")

    if extension == ".pdf" and (
        not content.startswith(b"%PDF-") or b"%%EOF" not in content[-2048:]
    ):
        raise ValueError("Un fichier PDF semble invalide.")
    if extension in {".jpg", ".jpeg"} and not content.startswith(b"\xff\xd8\xff"):
        raise ValueError("Un fichier JPG semble invalide.")
    if extension == ".png" and not content.startswith(b"\x89PNG\r\n\x1a\n"):
        raise ValueError("Un fichier PNG semble invalide.")
    if extension == ".docx":
        try:
            with zipfile.ZipFile(io.BytesIO(content)) as document:
                document_files = set(document.namelist())
        except zipfile.BadZipFile as error:
            raise ValueError("Un fichier DOCX semble invalide.") from error
        if not {"[Content_Types].xml", "word/document.xml"}.issubset(document_files):
            raise ValueError("Un fichier DOCX semble invalide.")

    return content_type


@app.post("/api/contact-requests")
def create_contact_request():
    origin = request.headers.get("Origin", "").rstrip("/")
    expected_origin = SITE_ORIGIN.rstrip("/") if SITE_ORIGIN else request.host_url.rstrip("/")
    if origin and not hmac.compare_digest(origin, expected_origin):
        return error_response("Origine de la demande non autorisée.", 403)

    fields = {
        name: request.form.get(name, "").strip()
        for name in ("name", "email", "phone", "profile", "company", "service", "budget", "subject", "message")
    }
    if fields["profile"] not in ("", "Particulier", "Entreprise / Professionnel"):
        return error_response("Le profil choisi est invalide.", 400)
    if any(not fields[name] for name in ("name", "email", "phone", "service", "subject", "message")):
        return error_response("Veuillez renseigner tous les champs obligatoires.", 400)
    if request.form.get("consent") != "yes":
        return error_response("Veuillez accepter d'être recontacté pour envoyer votre demande.", 400)
    if fields["service"] not in CONTACT_SERVICES:
        return error_response("Le service choisi est invalide.", 400)
    if not EMAIL_PATTERN.fullmatch(fields["email"]) or len(fields["email"]) > 254:
        return error_response("Saisissez une adresse e-mail valide.", 400)
    if (
        len(fields["name"]) > 120
        or len(fields["phone"]) > 40
        or len(fields["company"]) > 160
        or len(fields["budget"]) > 80
        or len(fields["subject"]) > 160
        or len(fields["message"]) > 5000
    ):
        return error_response("Un des champs dépasse la longueur autorisée.", 400)

    uploaded_files = [upload for upload in request.files.getlist("files") if upload.filename]
    if len(uploaded_files) > MAX_CONTACT_FILES:
        return error_response(f"Vous pouvez joindre au maximum {MAX_CONTACT_FILES} fichiers.", 400)

    attachments: list[tuple[str, tuple[str, str], bytes]] = []
    total_file_bytes = 0
    for uploaded_file in uploaded_files:
        filename = secure_filename(uploaded_file.filename)
        if not filename:
            return error_response("Un nom de fichier joint est invalide.", 400)
        content = uploaded_file.read(MAX_CONTACT_FILES_BYTES + 1)
        total_file_bytes += len(content)
        if total_file_bytes > MAX_CONTACT_FILES_BYTES:
            return error_response("La taille totale des pièces jointes dépasse 12 Mo.", 413)
        try:
            content_type = validate_contact_attachment(filename, content)
        except ValueError as error:
            return error_response(str(error), 400)
        attachments.append((filename, content_type, content))

    if not CONTACT_RECEIVER or not EMAIL_PATTERN.fullmatch(CONTACT_RECEIVER):
        app.logger.error("Contact request receiver address is missing or invalid.")
        return error_response("L'adresse de réception des demandes n'est pas correctement configurée.", 503)
    if CONTACT_EMAIL_PROVIDER not in {"smtp", "resend"}:
        app.logger.error("Unknown contact email provider.")
        return error_response("L'envoi des demandes n'est pas correctement configuré.", 503)
    if CONTACT_EMAIL_PROVIDER == "resend" and (not RESEND_API_KEY or not RESEND_FROM):
        app.logger.error("Resend settings required for contact request delivery are incomplete.")
        return error_response("L'envoi des demandes n'est pas encore configuré. Veuillez réessayer ultérieurement.", 503)
    if CONTACT_EMAIL_PROVIDER == "smtp" and (not SMTP_HOST or not SMTP_USERNAME or not SMTP_PASSWORD):
        app.logger.error("SMTP settings required for contact request delivery are incomplete.")
        return error_response(
            "L'envoi des demandes n'est pas encore configuré. Veuillez réessayer ultérieurement.",
            503,
        )

    email_message = EmailMessage()
    safe_subject = re.sub(r"[\r\n]+", " ", fields["subject"]).strip()
    email_message["Subject"] = f"Demande NOVIA SOLUTIONS : {safe_subject}"
    email_message["From"] = RESEND_FROM if CONTACT_EMAIL_PROVIDER == "resend" else SMTP_USERNAME
    email_message["To"] = CONTACT_RECEIVER
    email_message["Reply-To"] = fields["email"]
    email_message.set_content(
        "\n".join(
            (
                "Nouvelle demande reçue via le site NOVIA SOLUTIONS.",
                "",
                f"Nom : {fields['name']}",
                f"E-mail : {fields['email']}",
                f"Téléphone : {fields['phone']}",
                f"Profil : {fields['profile'] or 'Non renseigné'}",
                f"Organisation / Profession : {fields['company'] or 'Non renseignée'}",
                f"Service : {fields['service']}",
                f"Budget : {fields['budget'] or 'Non renseigné'}",
                f"Objet : {fields['subject']}",
                "",
                "Message :",
                fields["message"],
            )
        )
    )
    try:
        if CONTACT_EMAIL_PROVIDER == "resend":
            payload = {
                "from": RESEND_FROM,
                "to": [CONTACT_RECEIVER],
                "reply_to": fields["email"],
                "subject": str(email_message["Subject"]),
                "text": email_message.get_content(),
                "attachments": [
                    {"filename": filename, "content": base64.b64encode(content).decode("ascii")}
                    for filename, _, content in attachments
                ],
            }
            api_request = URLRequest(
                "https://api.resend.com/emails",
                data=json.dumps(payload).encode("utf-8"),
                headers={"Authorization": f"Bearer {RESEND_API_KEY}", "Content-Type": "application/json"},
                method="POST",
            )
            with urlopen(api_request, timeout=20) as response:
                result = json.load(response)
            if not isinstance(result, dict) or not isinstance(result.get("id"), str) or not result["id"]:
                raise ValueError("Resend response does not contain an email identifier.")
        else:
            for filename, (maintype, subtype), content in attachments:
                email_message.add_attachment(content, maintype=maintype, subtype=subtype, filename=filename)
            with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=20) as mail_server:
                mail_server.starttls(context=ssl.create_default_context())
                mail_server.login(SMTP_USERNAME, SMTP_PASSWORD)
                mail_server.send_message(email_message)
    except HTTPError as error:
        app.logger.warning("Resend rejected a contact request (HTTP %s).", error.code)
        return error_response(
            "L'envoi de votre demande a échoué. Vos informations sont conservées dans le formulaire ; réessayez ou contactez-nous par e-mail.",
            502,
        )
    except (OSError, smtplib.SMTPException, URLError, ValueError) as error:
        app.logger.warning("Contact request email delivery failed: %s", type(error).__name__)
        return error_response(
            "L'envoi de votre demande a échoué. Vos informations sont conservées dans le formulaire ; réessayez ou contactez-nous par e-mail.",
            502,
        )

    return jsonify({"sent": True, "message": "Votre demande a été acceptée pour envoi. Si vous ne recevez pas de réponse, contactez-nous directement."}), 201


@app.post("/api/appointments")
def create_appointment():
    origin = request.headers.get("Origin", "").rstrip("/")
    expected_origin = SITE_ORIGIN.rstrip("/") if SITE_ORIGIN else request.host_url.rstrip("/")
    if origin and not hmac.compare_digest(origin, expected_origin):
        return error_response("Origine de la demande non autorisée.", 403)

    payload = request.get_json(silent=True)
    if not isinstance(payload, dict):
        return error_response("La demande de rendez-vous est invalide.", 400)

    fields = {
        name: str(payload.get(name, "")).strip()
        for name in ("service", "type", "date", "slot", "name", "email", "phone", "subject", "message", "consent")
    }
    if any(not fields[name] for name in ("service", "type", "date", "slot", "name", "email", "phone", "subject")):
        return error_response("Veuillez renseigner tous les champs obligatoires.", 400)
    if fields["consent"] != "yes":
        return error_response("Veuillez accepter d'être recontacté pour confirmer le rendez-vous.", 400)
    if fields["service"] not in SERVICES or fields["type"] not in MEETING_TYPES:
        return error_response("Le service ou le type de rendez-vous choisi est invalide.", 400)
    if not EMAIL_PATTERN.fullmatch(fields["email"]) or len(fields["email"]) > 254:
        return error_response("Saisissez une adresse e-mail valide.", 400)
    if len(fields["name"]) > 120 or len(fields["phone"]) > 40 or len(fields["subject"]) > 160 or len(fields["message"]) > 2000:
        return error_response("Un des champs dépasse la longueur autorisée.", 400)

    client_timezone = str(payload.get("clientTimezone", "")).strip()
    try:
        ZoneInfo(client_timezone)
    except (ValueError, ZoneInfoNotFoundError, OSError):
        client_timezone = "inconnu"

    try:
        selected_day = date.fromisoformat(fields["date"])
        timezone = get_timezone()
    except (ValueError, ZoneInfoNotFoundError, RuntimeError):
        return error_response("La date choisie est invalide.", 400)

    if selected_day.weekday() > 4 or selected_day < datetime.now(timezone).date():
        return error_response("Cette date n'est pas disponible. Choisissez un jour ouvré à venir.", 409)

    selected_slot = next((slot for slot in SLOT_TIMES if fields["slot"] == f"{slot[0]} - {slot[1]}"), None)
    if selected_slot is None:
        return error_response("Le créneau choisi n'est pas valide.", 400)

    slot_start = datetime.combine(selected_day, time.fromisoformat(selected_slot[0]), tzinfo=timezone)
    slot_end = datetime.combine(selected_day, time.fromisoformat(selected_slot[1]), tzinfo=timezone)
    if slot_start <= datetime.now(timezone):
        return error_response("Ce créneau est déjà passé. Choisissez-en un autre.", 409)

    try:
        service = calendar_service()
    except (GoogleAuthError, OSError, ValueError) as error:
        app.logger.warning("Stored Google Calendar credentials could not be refreshed: %s", error)
        return error_response("La connexion Google Calendar doit être renouvelée.", 503)
    if service is None:
        return error_response("L'agenda Google Calendar de NOVIA SOLUTIONS n'est pas connecté.", 503)

    BOOKINGS_DB.parent.mkdir(parents=True, exist_ok=True)
    with booking_lock, closing(sqlite3.connect(BOOKINGS_DB, timeout=20)) as database:
        database.execute(
            "CREATE TABLE IF NOT EXISTS bookings (start_utc TEXT PRIMARY KEY, event_id TEXT NOT NULL)"
        )
        database.execute("BEGIN IMMEDIATE")
        start_utc = slot_start.astimezone(ZoneInfo("UTC")).isoformat()
        try:
            database.execute("INSERT INTO bookings (start_utc, event_id) VALUES (?, '')", (start_utc,))
        except sqlite3.IntegrityError:
            existing = database.execute(
                "SELECT event_id FROM bookings WHERE start_utc = ?", (start_utc,)
            ).fetchone()
            database.rollback()
            if not existing or not existing[0]:
                return error_response("Ce créneau vient d'être réservé. Choisissez un autre horaire.", 409)

            try:
                existing_busy_periods = get_busy_periods(service, slot_start, slot_end)
            except (HttpError, GoogleAuthError, RuntimeError) as error:
                app.logger.warning("Google Calendar conflict check failed: %s", error)
                return error_response("La disponibilité de ce créneau ne peut pas être vérifiée.", 502)
            if overlaps(slot_start, slot_end, existing_busy_periods):
                return error_response("Ce créneau vient d'être réservé. Choisissez un autre horaire.", 409)

            try:
                database.execute("BEGIN IMMEDIATE")
                database.execute("DELETE FROM bookings WHERE start_utc = ?", (start_utc,))
                database.execute("INSERT INTO bookings (start_utc, event_id) VALUES (?, '')", (start_utc,))
            except sqlite3.Error as error:
                database.rollback()
                app.logger.warning("Local booking lock could not be refreshed: %s", error)
                return error_response("Ce créneau vient d'être réservé. Choisissez un autre horaire.", 409)

        try:
            busy_periods = get_busy_periods(service, slot_start, slot_end)
            if overlaps(slot_start, slot_end, busy_periods):
                database.rollback()
                return error_response("Ce créneau n'est plus disponible. Choisissez un autre horaire.", 409)

            description = "\n".join([
                f"Nom : {fields['name']}",
                f"E-mail : {fields['email']}",
                f"Téléphone : {fields['phone']}",
                f"Fuseau du client : {client_timezone}",
                f"Type : {fields['type']}",
                f"Objet : {fields['subject']}",
                f"Commentaire : {fields['message'] or 'Aucun'}",
            ])
            event = service.events().insert(
                calendarId=CALENDAR_ID,
                sendUpdates="all",
                body={
                    "summary": f"NOVIA SOLUTIONS | {fields['service']}",
                    "description": description,
                    "start": {"dateTime": slot_start.isoformat(), "timeZone": CALENDAR_TIMEZONE},
                    "end": {"dateTime": slot_end.isoformat(), "timeZone": CALENDAR_TIMEZONE},
                    "attendees": [{"email": fields["email"], "displayName": fields["name"]}],
                    "transparency": "opaque",
                    "visibility": "private",
                },
            ).execute()
            database.execute(
                "UPDATE bookings SET event_id = ? WHERE start_utc = ?",
                (event["id"], start_utc),
            )
            database.commit()
        except (HttpError, GoogleAuthError, RuntimeError, sqlite3.Error) as error:
            database.rollback()
            app.logger.warning("Google Calendar booking failed: %s", error)
            return error_response("La réservation n'a pas abouti. Réessayez ou contactez NOVIA SOLUTIONS.", 502)

    return jsonify({"confirmed": True, "date": fields["date"], "slot": fields["slot"]}), 201


if __name__ == "__main__":
    app.run(host=HOST, port=PORT, debug=False)