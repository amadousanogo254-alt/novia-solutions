# Réception des demandes de contact

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
