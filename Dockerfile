# Etapa 1: Build do Next.js
FROM node:20-alpine AS builder

WORKDIR /app

# Copia os arquivos de configuração
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copia o restante do código
COPY . .

# Gera o build de produção
RUN npm run build

# Etapa 2: Servidor final
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3001

# Copia apenas o necessário do builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.* ./

EXPOSE 3000

# Inicia o servidor Next.js
CMD ["npm", "start"]
