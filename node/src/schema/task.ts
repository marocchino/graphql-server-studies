import { builder } from "../builder";

builder.prismaNode("Task", {
  id: { field: "id" },
  fields: (t) => ({
    _id: t.exposeID("id"),
    name: t.exposeString("name"),
    completed: t.exposeBoolean("completed"),
  }),
});

export const TaskWhereInput = builder.inputType("TaskWhereInput", {
  fields: (t) => ({
    completed: t.boolean(),
  }),
});
