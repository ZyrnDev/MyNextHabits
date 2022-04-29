ARG NODE_VERSION=18
ARG NODE_OS=alpine3.14
FROM node:${NODE_VERSION}-${NODE_OS}

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD npm start