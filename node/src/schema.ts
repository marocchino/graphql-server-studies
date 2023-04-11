import { builder } from "./builder";
import { db } from "./db";

builder.prismaNode("Project", {
  id: { field: "id" },
  fields: (t) => ({
    _id: t.exposeID("id"),
    name: t.exposeString("name"),
    description: t.exposeString("description"),
  }),
});

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string({}),
      },
      resolve: (_, { name }) => `hello, ${name || "World"}`,
    }),
    project: t.prismaField({
      type: "Project",
      nullable: false,
      args: {
        id: t.arg.id({ required: true }),
      },
      resolve: async (query, _root, { id }) =>
        db.project.findUnique({
          ...query,
          where: { id: +id },
        }) as any,
    }),
  }),
});

builder.mutationType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string({}),
      },
      resolve: (_, { name }) => `hello, ${name || "World"}`,
    }),
  }),
});

export const schema = builder.toSchema();
