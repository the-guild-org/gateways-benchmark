FROM denoland/deno:alpine-1.33.2

RUN apk --no-cache add curl

RUN addgroup -S gw && adduser -S gw -G gw

EXPOSE 4000

WORKDIR /home/deno

USER deno

ADD . .

ENV PORT 4000

RUN deno cache index.ts

CMD ["run", "--unstable", "--allow-net", "--allow-env", "--no-check", "index.ts"]
