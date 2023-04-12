import { builder } from "../builder";
import { SortOrder } from "./global";

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
export const TaskOrderByInput = builder.inputType("TaskOrderByInput", {
  fields: (t) => ({
    createdAt: t.field({
      type: SortOrder,
      defaultValue: "desc",
      required: true,
    }),
  }),
});
