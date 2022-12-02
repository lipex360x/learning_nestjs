FROM node:18.9.0-alpine3.16

RUN apk add --no-cache bash

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@9.0.0

USER node

WORKDIR /home/node/app