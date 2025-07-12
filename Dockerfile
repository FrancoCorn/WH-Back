# Builder image
FROM node:22 AS builder

ENV NODE_ENV=build
USER node
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY --chown=node:node . .
RUN npm run prisma:generate && npm run build


# Productive image
FROM node:22

ENV NODE_ENV=production

USER node
WORKDIR /app

COPY --from=builder --chown=node:node /app/package*.json ./
COPY --from=builder --chown=node:node /app/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /app/dist/ ./dist/
COPY --from=builder --chown=node:node /app/prisma/ ./prisma/
COPY --from=builder --chown=node:node /app/.env ./

CMD ["npm", "run", "start:migrate:prod"]