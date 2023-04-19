FROM node:19-alpine

RUN addgroup -S mesh && adduser -S mesh -G mesh

WORKDIR /home/service
COPY . ./

RUN yarn install --production

ENV PORT 3000
EXPOSE 3000

USER mesh
WORKDIR /home/service

CMD yarn start