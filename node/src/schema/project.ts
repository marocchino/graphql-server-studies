import { builder } from "../builder";
import { db } from "../db";

builder.prismaNode("Project", {
  id: { field: "id" },
  fields: (t) => ({
    _id: t.exposeID("id"),
    name: t.exposeString("name"),
    description: t.string({
      select: { description: true },
      resolve: (project) => project.description || "",
    }),
  }),
});

builder.queryFields((t) => ({
  project: t.prismaField({
    type: "Project",
    nullable: false,
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: async (_query, _root, { id }) =>
      db.project.findUniqueOrThrow({
        where: { id: +id },
      }),
  }),
}));
