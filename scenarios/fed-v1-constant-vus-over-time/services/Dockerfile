FROM node:20-alpine

RUN apk --no-cache add curl

RUN addgroup -S subgraph && adduser -S subgraph -G subgraph

WORKDIR /home/service
COPY . ./

RUN yarn install --production

ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

USER subgraph
WORKDIR /home/service

CMD yarn start