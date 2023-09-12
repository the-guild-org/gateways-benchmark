FROM node:18-alpine

RUN apk --no-cache add curl

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY products.js .
COPY products.graphql .

CMD [ "node", "products.js" ]
