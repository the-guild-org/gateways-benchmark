FROM denoland/deno:alpine-1.33.2

RUN apk --no-cache add curl

RUN addgroup -S gw && adduser -S gw -G gw

WORKDIR /home/gw
COPY index.ts ./

RUN deno cache main.ts
ENV PORT 4000

EXPOSE 4000

USER gw
WORKDIR /home/gw

CMD deno run --unstable --allow-net --allow-env --no-check index.ts
