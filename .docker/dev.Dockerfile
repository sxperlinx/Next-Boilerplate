FROM node:23.10-alpine3.20 AS base
FROM base AS builder

WORKDIR /app

COPY package.json bun.lockb ./

RUN npm install -g bun && bun install

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .
COPY .env.development ./.env.local

ENV NEXT_TELEMETRY_DISABLED 1

CMD bun run dev