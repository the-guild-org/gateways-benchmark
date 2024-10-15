FROM node:22-alpine

RUN apk --no-cache add curl

WORKDIR /home/gw
COPY package.json ./
COPY .wundergraph .graphqlrc.yaml tsconfig.json ./

RUN yarn install

ENV CONFIG_PATH "/config"
ENV NODE_ENV production
ENV WG_NODE_HOST 0.0.0.0
ENV WG_NODE_PORT 4000

EXPOSE 9991
EXPOSE 4000

WORKDIR /home/gw

CMD yarn build && yarn start