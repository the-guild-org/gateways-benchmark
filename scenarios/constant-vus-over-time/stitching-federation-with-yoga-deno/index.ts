import { serve } from "https://deno.land/std@0.186.0/http/server.ts";
import { createYoga } from "npm:graphql-yoga";
import { getStitchedSchemaWithUrls } from "npm:@graphql-tools/federation";

async function main() {
  const schema = await getStitchedSchemaWithUrls([
    {
      endpoint: "http://accounts:4001/graphql",
    },
    {
      endpoint: "http://reviews:4004/graphql",
    },
    {
      endpoint: "http://products:4003/graphql",
    },
    {
      endpoint: "http://inventory:4002/graphql",
    },
  ]);

  const yoga = createYoga({ schema });
  const port = process.env.PORT ? parseInt(Deno.env.get('PORT')) : 4000;
  serve(yoga, {
    port,
    onListen() {
      console.info(`Server is running on http://localhost:${port}/graphql`);
    }
  })
}

main().catch(console.error);
