import { describe, expect, it } from "@jest/globals";
import { builder } from "./schema";

export const schema = builder.toSchema();

describe("schema", () => {
  it("should be defined", () => {
    expect(schema).toBeDefined();
  });
});
