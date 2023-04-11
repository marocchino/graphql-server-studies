import { describe, beforeEach, expect, it } from "@jest/globals";
import { PrismaClient } from "@prisma/client";
import { graphql } from "graphql";
import { schema } from "./";

describe("query project", () => {
  it("should return project", async () => {
    const query = `
      query Project($id: ID!) {
        project(id: $id) {
          id
          _id
          description
          dueOn
          name
        }
      }
    `;
    const variables = { id: "1" };

    const result = await graphql({
      schema,
      source: query,
      variableValues: variables,
      contextValue: {},
    });

    expect(result).toEqual({
      data: {
        project: {
          id: "UHJvamVjdDox",
          _id: "1",
          description: "desc",
          dueOn: null,
          name: "name",
        },
      },
    });
  });
});
