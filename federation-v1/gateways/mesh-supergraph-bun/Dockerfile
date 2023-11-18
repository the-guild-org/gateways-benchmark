FROM oven/bun:1.0.13

COPY package.json ./
COPY .meshrc.yaml ./
COPY .mesh ./.mesh
COPY index.ts ./

ENV PORT 4000
ENV NODE_ENV production

RUN bun install

EXPOSE 4000

CMD bun run index.ts
