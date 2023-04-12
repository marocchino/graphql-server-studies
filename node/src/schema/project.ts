import { builder } from "../builder";
import { db } from "../db";

builder.prismaNode("Project", {
  id: { field: "id" },
  fields: (t) => ({
    _id: t.exposeID("id"),
    name: t.exposeString("name"),
    dueOn: t.expose("due_on", { type: "DateTime", nullable: true }),
    description: t.string({
      select: { description: true },
      resolve: (project) => project.description || "",
    }),
    tasks: t.prismaField({
      type: ["Task"],
      resolve: (_, project) =>
        db.task.findMany({
          where: { project_id: project.id },
        }),
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
