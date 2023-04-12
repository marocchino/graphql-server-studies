import { builder } from "../builder";

builder.prismaNode("Task", {
  id: { field: "id" },
  fields: (t) => ({
    _id: t.exposeID("id"),
    name: t.exposeString("name"),
    completed: t.exposeBoolean("completed"),
  }),
});
