#!/bin/bash

# Script de déploiement pour DMS Frontend
echo "🚀 Déploiement de DMS Frontend..."

# Variables
APP_NAME="dms-frontend"
DEPLOY_PATH="/var/www/dms-frontend"
BACKUP_PATH="/var/www/backups"

# Créer les dossiers nécessaires
sudo mkdir -p $DEPLOY_PATH
sudo mkdir -p $BACKUP_PATH

# Sauvegarder l'ancienne version
if [ -d "$DEPLOY_PATH" ]; then
    echo "📦 Sauvegarde de l'ancienne version..."
    sudo cp -r $DEPLOY_PATH $BACKUP_PATH/backup-$(date +%Y%m%d-%H%M%S)
fi

# Installer les dépendances
echo "📦 Installation des dépendances..."
npm ci --production

# Build de l'application
echo "🔨 Build de l'application..."
npm run build

# Copier les fichiers de build
echo "📁 Copie des fichiers..."
sudo cp -r .next $DEPLOY_PATH/
sudo cp -r public $DEPLOY_PATH/
sudo cp package.json $DEPLOY_PATH/
sudo cp next.config.js $DEPLOY_PATH/

# Configurer PM2
echo "⚙️ Configuration de PM2..."
sudo npm install -g pm2

# Créer le fichier ecosystem.config.js
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: '$APP_NAME',
    script: 'npm',
    args: 'start',
    cwd: '$DEPLOY_PATH',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Démarrer l'application
echo "🚀 Démarrage de l'application..."
pm2 start ecosystem.config.js
pm2 save
pm2 startup

echo "✅ Déploiement terminé !"
echo "🌐 Votre application est accessible sur: http://votre-domaine.com:3000" 