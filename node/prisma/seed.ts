import { PrismaClient } from "../generated/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.project.upsert({
    where: {
      id: 1,
    },
    update: {
      name: "name",
      description: "desc",
      due_on: null,
    },
    create: {
      name: "name",
      description: "desc",
      due_on: null,
    },
  });
  await prisma.project.upsert({
    where: {
      id: 2,
    },
    update: {
      name: "other project",
      description: "desc",
      due_on: null,
    },
    create: {
      name: "other project",
      description: "desc",
      due_on: null,
    },
  });
  await prisma.task.upsert({
    where: {
      id: 1,
    },
    update: {
      name: "task 1",
      project_id: 1,
      completed: false,
    },
    create: {
      name: "task 1",
      project_id: 1,
      completed: false,
    },
  });
  await prisma.task.upsert({
    where: {
      id: 2,
    },
    update: {
      name: "task 2",
      project_id: 1,
      completed: true,
    },
    create: {
      name: "task 2",
      project_id: 1,
      completed: true,
    },
  });
  await prisma.task.upsert({
    where: {
      id: 3,
    },
    update: {
      name: "task 3",
      project_id: 2,
      completed: false,
    },
    create: {
      name: "task 3",
      project_id: 2,
      completed: false,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
