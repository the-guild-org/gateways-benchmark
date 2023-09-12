FROM oven/bun:1.0.1

COPY package.json yarn.lock ./
COPY .meshrc.yaml ./
COPY .mesh ./.mesh
COPY index.ts ./

ENV PORT 4000
ENV NODE_ENV production

RUN bun install

EXPOSE 4000

CMD bun run index.ts
