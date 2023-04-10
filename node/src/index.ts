import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { builder } from "./schema";

const yoga = createYoga({
  graphqlEndpoint: "/graphiql",
  schema: builder.toSchema(),
});

const server = createServer(yoga);
server.listen(3000);
