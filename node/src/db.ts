import { Prisma, PrismaClient } from "../generated/client";

export const db = new PrismaClient();

console.log(Prisma.dmmf.datamodel.models);
