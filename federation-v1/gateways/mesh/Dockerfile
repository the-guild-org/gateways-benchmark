FROM node:22-alpine

RUN apk --no-cache add curl
RUN apk add --no-cache libc6-compat
RUN apk add --no-cache curl-dev
RUN apk add --no-cache python3 py3-pip make build-base gcc wget git
RUN ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2

RUN addgroup -S gw && adduser -S gw -G gw

WORKDIR /home/gw
COPY package.json yarn.lock ./
COPY config ./

RUN yarn install --production
ENV PORT 4000
ENV NODE_ENV production

EXPOSE 4000
ENV CONFIG_PATH "/config"
ENV NODE_ENV production

USER gw
WORKDIR /home/gw

CMD yarn start