# Réception des demandes de contact

## Resend pour l'aperçu Render

Render gratuit bloque les ports SMTP. Le serveur peut utiliser l'API HTTPS de Resend à la place, tout en conservant la validation des pièces jointes (5 fichiers et 12 Mo au total).

1. Créez une clé API depuis le tableau de bord Resend et conservez-la secrète.
2. Dans Render, ajoutez ces variables d'environnement :

   ```dotenv
   CONTACT_EMAIL_PROVIDER=resend
   RESEND_API_KEY=VOTRE_CLE_API
   RESEND_FROM=onboarding@resend.dev
   CONTACT_RECEIVER=adresse-du-compte-resend@example.com
   SITE_ORIGIN=https://novia-solutions.onrender.com
   ```

3. Renseignez la véritable clé uniquement dans Render, jamais dans GitHub ou dans une conversation. `CONTACT_RECEIVER` doit être exactement l'adresse du compte Resend lors de l'utilisation de `onboarding@resend.dev`.
4. Redéployez après l'ajout des variables et testez avec une demande et une pièce jointe non sensibles. Vérifiez la réception dans la boîte du compte et dans le tableau de bord Resend.

L'adresse `onboarding@resend.dev` est limitée aux tests vers l'adresse du compte Resend. Pour un usage réel, vérifiez un domaine personnel chez Resend et utilisez une adresse expéditrice de ce domaine dans `RESEND_FROM`. L'acceptation par l'API ne garantit pas la réception finale.

## SMTP local

Le formulaire envoie les demandes et leurs pièces jointes à `noviasolutions0@gmail.com` avec une connexion SMTP chiffrée TLS. Les pièces jointes acceptées sont PDF, JPG, PNG et DOCX, avec une limite de 5 fichiers et 12 Mo au total.

Pour activer l'envoi Gmail :

1. Activez la validation en deux étapes sur le compte Google destinataire, si ce n'est pas déjà fait.
2. Créez un mot de passe d'application depuis les paramètres de sécurité Google. N'utilisez pas le mot de passe habituel du compte.
3. Ajoutez les paramètres suivants au fichier privé `C:\Users\amado\.novia-solutions\.env` :

   ```dotenv
   CONTACT_RECEIVER=noviasolutions0@gmail.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USERNAME=noviasolutions0@gmail.com
   SMTP_PASSWORD=remplacer-par-le-mot-de-passe-d-application
   ```

4. Remplacez la valeur de `SMTP_PASSWORD` localement par le mot de passe d'application, sans le communiquer ni l'ajouter au projet.
5. Redémarrez le serveur Flask pour qu'il recharge la configuration, puis envoyez une demande de test avec une pièce jointe non sensible.

Tant que le serveur SMTP n'est pas configuré, le formulaire signale explicitement que l'envoi est indisponible et conserve les champs et les fichiers sélectionnés.
