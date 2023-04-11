import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";

const yoga = createYoga({
  graphqlEndpoint: "/graphiql",
  schema,
});

const server = createServer(yoga);
server.listen(3000);
