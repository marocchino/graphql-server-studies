import { describe, expect, it } from "@jest/globals";
import { schema } from "./schema";

describe("schema", () => {
  it("should be defined", () => {
    expect(schema).toBeDefined();
  });
});
