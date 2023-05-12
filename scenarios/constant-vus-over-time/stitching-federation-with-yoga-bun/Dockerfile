FROM oven/bun

COPY index.ts ./
COPY package.json yarn.lock ./

ENV PORT 4000
ENV NODE_ENV production

RUN bun install

EXPOSE 4000

CMD bun run index.ts