import { builder } from "../builder";

export const SortOrder = builder.enumType("SortOrder", {
  values: {
    Desc: {
      description: "Descending",
      value: "desc",
    },
    Asc: {
      description: "Ascending",
      value: "asc",
    },
  } as const,
});
