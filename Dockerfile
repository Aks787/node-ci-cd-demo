FROM node:20-alpine AS deps
RUN apk update && apk upgrade --no-cache
WORKDIR /app

COPY package.json ./

RUN npm install --omit=dev


#-------Builder-stepp-complete-----------

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY server.js package.json ./

USER node

EXPOSE 3000

CMD ["node" , "server.js"]
