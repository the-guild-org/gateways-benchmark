FROM node:19-alpine

RUN addgroup -S mesh && adduser -S mesh -G mesh

WORKDIR /home/mesh
COPY package.json ./
COPY config ./

RUN yarn install --production
ENV PORT 4000

EXPOSE 4000
ENV CONFIG_PATH "/config"

USER mesh
WORKDIR /home/mesh

CMD yarn start