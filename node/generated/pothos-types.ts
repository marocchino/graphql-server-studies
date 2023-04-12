/* eslint-disable */
import type { Prisma, User, Project, Task } from "./client";
export default interface PrismaTypes {
  User: {
    Name: "User";
    Shape: User;
    Include: never;
    Select: Prisma.UserSelect;
    OrderBy: Prisma.UserOrderByWithRelationInput;
    WhereUnique: Prisma.UserWhereUniqueInput;
    Where: Prisma.UserWhereInput;
    Create: {};
    Update: {};
    RelationName: never;
    ListRelations: never;
    Relations: {};
  };
  Project: {
    Name: "Project";
    Shape: Project;
    Include: Prisma.ProjectInclude;
    Select: Prisma.ProjectSelect;
    OrderBy: Prisma.ProjectOrderByWithRelationInput;
    WhereUnique: Prisma.ProjectWhereUniqueInput;
    Where: Prisma.ProjectWhereInput;
    Create: {};
    Update: {};
    RelationName: "tasks";
    ListRelations: "tasks";
    Relations: {
      tasks: {
        Shape: Task[];
        Name: "Task";
      };
    };
  };
  Task: {
    Name: "Task";
    Shape: Task;
    Include: Prisma.TaskInclude;
    Select: Prisma.TaskSelect;
    OrderBy: Prisma.TaskOrderByWithRelationInput;
    WhereUnique: Prisma.TaskWhereUniqueInput;
    Where: Prisma.TaskWhereInput;
    Create: {};
    Update: {};
    RelationName: "project";
    ListRelations: never;
    Relations: {
      project: {
        Shape: Project;
        Name: "Project";
      };
    };
  };
}
