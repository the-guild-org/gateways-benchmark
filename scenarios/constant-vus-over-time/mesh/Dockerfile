FROM node:19-alpine

RUN apk --no-cache add curl

RUN addgroup -S gw && adduser -S gw -G gw

WORKDIR /home/gw
COPY package.json yarn.lock ./
COPY config ./

RUN yarn install --production
ENV PORT 4000

EXPOSE 4000
ENV CONFIG_PATH "/config"
ENV NODE_DEV production

USER gw
WORKDIR /home/gw

CMD yarn start