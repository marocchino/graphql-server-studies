/* eslint-disable */
import type { Prisma, User, Project } from "@prisma/client";
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
    Include: never;
    Select: Prisma.ProjectSelect;
    OrderBy: Prisma.ProjectOrderByWithRelationInput;
    WhereUnique: Prisma.ProjectWhereUniqueInput;
    Where: Prisma.ProjectWhereInput;
    Create: {};
    Update: {};
    RelationName: never;
    ListRelations: never;
    Relations: {};
  };
}
