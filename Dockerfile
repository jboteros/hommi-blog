# Use official Node.js LTS image
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install git
RUN apk add --no-cache git

# Copy package files first for better caching
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Install dependencies
RUN if [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
    elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    else npm install; fi

# Copy the rest of the app
COPY . .

# Copy environment files if they exist
COPY .env* ./

# Build the Next.js app with environment variables
# Environment variables must be available at build time for Next.js static generation
RUN npm run build

# Production image, copy built assets and install only production deps
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next-env.d.ts ./
COPY --from=builder /app/tsconfig.json ./

# Copy environment files for runtime
COPY --from=builder /app/.env* ./

EXPOSE 3000

CMD ["npm", "start"]
