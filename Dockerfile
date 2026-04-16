# Use an official Node.js runtime as a parent image
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app


# Copy package.json
COPY package.json ./

# Copy pnpm-lock.yaml if it exists (ignore if missing)
RUN if [ -f pnpm-lock.yaml ]; then echo "Lockfile exists"; else touch pnpm-lock.yaml; fi
COPY pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN pnpm run build

# Production image
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config if needed (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
