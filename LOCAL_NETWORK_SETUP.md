# Tester NOVIA SOLUTIONS sur un téléphone

« Go Live » de VS Code démarre un serveur de fichiers statiques. Il ne lance pas l'application Flask nécessaire aux formulaires de contact, aux rendez-vous et aux API du site. Pour tester ces fonctionnalités, lancez `server.py`.

## Depuis un réseau Wi-Fi privé

1. Connectez l'ordinateur et le téléphone au même réseau Wi-Fi.
2. Dans PowerShell, lancez :

   ```powershell
   $env:NOVIA_HOST = "0.0.0.0"
   python "C:\Users\amado\Downloads\Novia solution\server.py"
   ```

3. Si Windows demande une autorisation du pare-feu, autorisez Python uniquement sur les réseaux privés.
4. Sur le téléphone, ouvrez `http://192.168.1.11:8000`.
5. Si l'adresse Wi-Fi de l'ordinateur change, recherchez son adresse IPv4 dans les paramètres réseau Windows et remplacez `192.168.1.11` dans l'URL.

Le nom `localhost` ou l'adresse `127.0.0.1` sur le téléphone désigne le téléphone lui-même, pas l'ordinateur.

## Sécurité

Cette configuration est destinée aux tests sur un réseau privé de confiance. N'utilisez pas le serveur Flask de développement sur un réseau public, ne créez pas de redirection de port sur le routeur et arrêtez le serveur avec `Ctrl+C` après les tests.

Le changement de `NOVIA_HOST` ne persiste pas après fermeture de la fenêtre PowerShell. Sans cette variable, le serveur reste accessible uniquement depuis l'ordinateur (`127.0.0.1`).
