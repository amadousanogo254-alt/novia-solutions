# Connexion Google Calendar

## Page de réservation Google

La page de rendez-vous du site redirige vers la page de réservation Google Agenda configurée par NOVIA SOLUTIONS. Les disponibilités et les informations demandées aux clients se règlent directement dans Google Agenda. Cette méthode ne nécessite pas de connexion OAuth ni de stockage de jeton sur Render. Vérifiez la disponibilité de votre page et effectuez une réservation de test avant publication.

## Ancienne intégration dans le site

Les étapes ci-dessous décrivent l'ancienne intégration, conservée dans le serveur mais non utilisée par la page de rendez-vous actuelle.

Le site utilise un backend Python pour conserver les secrets OAuth hors du navigateur. Les jetons et la base locale sont écrits dans `%USERPROFILE%\.novia-solutions`, en dehors du dossier public du site.

## Google Cloud

1. Créez ou choisissez un projet dans Google Cloud et activez l'API Google Calendar.
2. Configurez l'écran de consentement OAuth. En mode test, ajoutez le compte Google qui gère l'agenda comme utilisateur test.
3. Créez un identifiant OAuth de type **Application Web**.
4. Ajoutez l'URI de redirection exacte. Pour un serveur local sur le port 8001 : `http://localhost:8001/auth/google/callback`.
5. Téléchargez le fichier JSON du client OAuth et placez-le hors du dossier du site, par exemple `%USERPROFILE%\.novia-solutions\oauth-client.json`.

Pour un site public, Google peut demander la vérification OAuth pour les autorisations Calendar. Le serveur public doit être déployé en HTTPS avec un stockage persistant et privé pour le jeton et la base de réservations. Le serveur Flask de ce dépôt est prévu pour le développement local, pas pour être exposé directement sur Internet.

## Lancement local sous PowerShell

Installez les bibliothèques nécessaires :

```powershell
python -m pip install -r requirements.txt
```

Créez le dossier privé `%USERPROFILE%\.novia-solutions` et son fichier `.env` à cet emplacement, avec les paramètres ci-dessous. Remplacez le chemin du fichier OAuth par le chemin réel et générez une clé d'administration avec `python -c "import secrets; print(secrets.token_urlsafe(32))"`. Ne placez pas ce fichier dans le dossier du site.

```dotenv
PORT=8001
SITE_ORIGIN=http://localhost:8001
GOOGLE_REDIRECT_URI=http://localhost:8001/auth/google/callback
GOOGLE_CLIENT_SECRETS_FILE=C:\Users\VOTRE_NOM\.novia-solutions\oauth-client.json
GOOGLE_TOKEN_FILE=C:\Users\VOTRE_NOM\.novia-solutions\google-token.json
NOVIA_BOOKINGS_DB=C:\Users\VOTRE_NOM\.novia-solutions\bookings.sqlite3
GOOGLE_CALENDAR_ID=primary
GOOGLE_CALENDAR_TIMEZONE=Europe/Paris
GOOGLE_CONNECT_KEY=REMPLACER_PAR_LA_CLE_GENEREE
```

Le serveur statique déjà lancé peut occuper le port 8000. Utilisez le port 8001 pour ce backend et ajoutez son URI de redirection dans Google Cloud. Lancez `python server.py` depuis le dossier du site. Dans une seconde fenêtre PowerShell, demandez une URL OAuth au serveur, puis ouvrez-la dans le navigateur :

```powershell
$env:GOOGLE_CONNECT_KEY = python -c "from dotenv import dotenv_values; from pathlib import Path; print(dotenv_values(Path.home() / '.novia-solutions' / '.env')['GOOGLE_CONNECT_KEY'])"
$headers = @{ Authorization = "Bearer $env:GOOGLE_CONNECT_KEY" }
$auth = Invoke-RestMethod -Method Post -Uri "http://localhost:8001/api/admin/google/connect-url" -Headers $headers
Start-Process $auth.authorizationUrl
```

Connectez le compte Google qui possède l'agenda NOVIA SOLUTIONS. Après le retour sur le site, la page des rendez-vous lit les périodes occupées via Google Calendar FreeBusy. Une réservation valide crée un événement privé de 30 minutes et envoie une invitation e-mail au client.

## Réglages métier

Les créneaux proposés sont actuellement du lundi au vendredi à 09:00, 10:30, 14:00 et 16:00, heure du fuseau configuré. La durée est de 30 minutes. Ajustez `SLOT_TIMES` dans `server.py` si les horaires de NOVIA SOLUTIONS sont différents. Le fuseau initial est `Europe/Paris` et peut être changé via `GOOGLE_CALENDAR_TIMEZONE`.

La vérification Google FreeBusy et la création de l'événement sont faites sur le serveur. La base SQLite locale empêche deux demandes concurrentes du même créneau sur ce serveur ; en production multi-instance, remplacez-la par une base partagée avec contrainte d'unicité.