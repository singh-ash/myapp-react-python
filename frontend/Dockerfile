FROM node:21.5-alpine as base

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install --silent

COPY . ./

CMD [ "npm", "start" ]
