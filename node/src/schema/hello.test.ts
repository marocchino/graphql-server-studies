import { describe, expect, it } from "@jest/globals";
import { graphql } from "graphql";
import { schema } from "./";

describe("query hello", () => {
  it("should return hello world", async () => {
    const query = `
      query Hello($name: String) {
        hello(name: $name)
      }
    `;
    const variables = { name: "John Doe" };

    const result = await graphql({
      schema,
      source: query,
      variableValues: variables,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data).toEqual({
      hello: "hello, John Doe",
    });
  });
});
describe("mutation hello", () => {
  it("should return hello world", async () => {
    const query = `
      mutation Hello($name: String) {
        hello(name: $name)
      }
    `;
    const variables = { name: "John Doe" };

    const result = await graphql({
      schema,
      source: query,
      variableValues: variables,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data).toEqual({
      hello: "hello, John Doe",
    });
  });
});
