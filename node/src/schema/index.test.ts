import { describe, expect, it } from "@jest/globals";
import { schema } from "./";

describe("schema", () => {
  it("should be defined", () => {
    expect(schema).toBeDefined();
  });
});
