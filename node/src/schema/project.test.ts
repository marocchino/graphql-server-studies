import { describe, expect, it } from "@jest/globals";
import { graphql } from "graphql";
import { schema } from "./";

describe("query project", () => {
  const query = `
    query Project($id: ID!, $filter: TaskWhereInput!, $order: TaskOrderByInput) {
      project(id: $id) {
        id
        _id
        description
        dueOn
        name
        tasks(filter: $filter, orderBy: $order) {
          name
          completed
        }
      }
    }
  `;
  it("should return project with task filter", async () => {
    const variables = { id: "1", filter: { completed: false } };

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
          tasks: [
            {
              name: "task 1",
              completed: false,
            },
          ],
        },
      },
    });
  });

  it("should return project without task filter", async () => {
    const variables = { id: "1", filter: {} };

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
          tasks: [
            {
              name: "task 2",
              completed: true,
            },
            {
              name: "task 1",
              completed: false,
            },
          ],
        },
      },
    });
  });
});
