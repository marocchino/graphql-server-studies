import { createServer } from 'node:http';
import { createYoga } from 'graphql-yoga';
import SchemaBuilder from '@pothos/core';
import { PrismaClient } from '../generated/client';
import PrismaPlugin from '@pothos/plugin-prisma';

import type PrismaTypes from '../generated/pothos-types';

const prisma = new PrismaClient({});
const builder = new SchemaBuilder<{PrismaTypes: PrismaTypes;}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
    // defaults to false, uses /// comments from prisma schema as descriptions
    // for object types, relations and exposed fields.
    // descriptions can be omitted by setting description to false
    // use where clause from prismaRelatedConnection for totalCount (will true by default in next major version)
    filterConnectionTotalCount: true,
  },
});


builder.queryType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string({}),
      },
      resolve: (_, { name }) => `hello, ${name || 'World'}`,
    }),
  }),
});

const yoga = createYoga({
  graphqlEndpoint: '/graphiql',
  schema: builder.toSchema(),
});

const server = createServer(yoga);
server.listen(3000);
