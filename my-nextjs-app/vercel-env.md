# Variables d'environnement Vercel

## 🔧 Configuration requise

Configurez ces variables dans votre dashboard Vercel :

### Variables obligatoires
- `NEXT_PUBLIC_API_URL` = URL de votre backend (ex: https://dms-backend.railway.app)

### Variables optionnelles
- `NEXT_PUBLIC_APP_NAME` = DMS - Dervox Monitoring Server
- `NEXT_PUBLIC_APP_VERSION` = 2.1.0
- `NEXT_PUBLIC_GA_ID` = ID Google Analytics (optionnel)

## 📝 Instructions de configuration

1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet
3. Allez dans "Settings" > "Environment Variables"
4. Ajoutez chaque variable avec sa valeur
5. Redéployez votre application

## 🔄 Redéploiement

Après avoir ajouté/modifié les variables :
1. Allez dans "Deployments"
2. Cliquez sur "Redeploy" sur le dernier déploiement
3. Ou poussez un nouveau commit sur GitHub 