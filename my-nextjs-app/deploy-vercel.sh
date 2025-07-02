#!/bin/bash

# Script de déploiement Vercel pour DMS Frontend
echo "🚀 Déploiement Vercel pour DMS Frontend..."

# Vérifier que Vercel CLI est installé
if ! command -v vercel &> /dev/null; then
    echo "📦 Installation de Vercel CLI..."
    npm install -g vercel
fi

# Build de l'application
echo "🔨 Build de l'application..."
npm run build

# Déploiement sur Vercel
echo "🚀 Déploiement sur Vercel..."
vercel --prod

echo "✅ Déploiement terminé !"
echo "🌐 Votre application est accessible sur: https://votre-app.vercel.app" 