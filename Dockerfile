FROM node:16

WORKDIR /app

ARG NPM_TOKEN

COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY .npmrc .npmrc
COPY next.config.js next.config.js
COPY next-env.d.ts next-env.d.ts
COPY src/ src/

RUN npm i
RUN npm run build