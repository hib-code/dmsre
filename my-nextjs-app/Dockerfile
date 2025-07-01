# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe les dépendances avec legacy-peer-deps pour résoudre les conflits
RUN npm ci --legacy-peer-deps

# Copie le code source
COPY . .

# Build de l'application Next.js
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Créer un utilisateur non-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copie les fichiers nécessaires depuis le build stage
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Expose le port
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Démarre l'application
CMD ["node", "server.js"] 