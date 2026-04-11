# 1) Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# 2) Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# optional but recommended for smaller prod image
# (matches next.config.ts -> output: 'standalone')
RUN npm run build

# 3) Runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=development
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# bring in the standalone build
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# install only prod deps for 'next start' if not using standalone server
RUN npm i --omit=dev && npm cache clean --force

EXPOSE 3000
CMD ["npm","start"]