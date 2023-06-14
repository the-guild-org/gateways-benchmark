FROM oven/bun:canary

COPY index.ts ./
COPY package.json ./

ENV PORT 4000
ENV NODE_ENV production

RUN bun install

RUN apt-get update && apt-get install -y curl

EXPOSE 4000

CMD bun run index.ts