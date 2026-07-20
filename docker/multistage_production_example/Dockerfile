# Builder stage
FROM Node:20-alipne as builder
COPY . .
RUN npm ci && npm run build
# runtime stage 
FROM node:20-alpine AS runtime
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/server.js"]

