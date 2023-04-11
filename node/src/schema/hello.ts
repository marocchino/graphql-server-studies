import { builder } from "../builder";

builder.queryFields((t) => ({
  hello: t.string({
    args: {
      name: t.arg.string({}),
    },
    resolve: (_, { name }) => `hello, ${name || "World"}`,
  }),
}));

builder.mutationFields((t) => ({
  hello: t.string({
    args: {
      name: t.arg.string({}),
    },
    resolve: (_, { name }) => `hello, ${name || "World"}`,
  }),
}));
