FROM node:20-alpine AS base

WORKDIR /app

RUN apk add --no-cache openssl

FROM base AS deps

COPY package.json package-lock.json ./

RUN npm ci --only=production && npm cache clean --force

FROM base AS builder

COPY package.json package-lock.json ./

RUN npm ci && npm cache clean --force

COPY prisma ./prisma

RUN npx prisma generate

COPY server/package.json server/package-lock.json ./server/

RUN cd server && npm ci && npm cache clean --force

COPY server ./server

WORKDIR /app/server

RUN npm run build

FROM base AS runner

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /app/node_modules/prisma ./node_modules/prisma
COPY --from=builder /app/server/node_modules ./server/node_modules
COPY --from=builder /app/server/dist ./server/dist
COPY package.json ./
COPY prisma ./prisma

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/api', (r) => {process.exit(r.statusCode === 200 || r.statusCode === 404 ? 0 : 1)})"

WORKDIR /app/server

CMD ["node", "dist/main.js"]

