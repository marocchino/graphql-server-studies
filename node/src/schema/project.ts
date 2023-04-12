import { builder } from "../builder";
import { db } from "../db";
import { TaskWhereInput, TaskOrderByInput } from "./task";

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
      args: {
        filter: t.arg({ type: TaskWhereInput }),
        orderBy: t.arg({
          type: TaskOrderByInput,
          defaultValue: { createdAt: "desc" },
        }),
      },
      resolve: (_, project, args) => {
        const where = { project_id: project.id };
        if (
          args.filter &&
          args.filter.completed !== undefined &&
          args.filter.completed !== null
        ) {
          return db.task.findMany({
            where: { ...where, completed: args.filter.completed },
            orderBy: [{ created_at: args?.orderBy?.createdAt ?? "desc" }],
          });
        }
        return db.task.findMany({
          where,
          orderBy: [{ created_at: args?.orderBy?.createdAt ?? "desc" }],
        });
      },
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
