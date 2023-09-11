FROM oven/bun:canary

COPY package.json ./
COPY .meshrc.yaml ./
COPY .mesh ./.mesh
COPY index.ts ./

ENV PORT 4000
ENV NODE_ENV production

RUN apt-get update && apt-get install -y curl

RUN bun install

RUN bun mesh build

EXPOSE 4000

CMD bun run index.ts
