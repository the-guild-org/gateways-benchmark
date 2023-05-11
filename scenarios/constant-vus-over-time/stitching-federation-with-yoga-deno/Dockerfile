FROM denoland/deno:alpine

RUN apk --no-cache add curl

RUN addgroup -S gw && adduser -S gw -G gw

WORKDIR /home/gw
COPY index.ts ./

ENV PORT 4000

EXPOSE 4000

USER gw
WORKDIR /home/gw

CMD deno run --unstable --allow-net --allow-env --no-check --reload index.ts
