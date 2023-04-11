import { PrismaClient } from "../generated/client";
const prisma = new PrismaClient();

async function main() {
  const project = await prisma.project.upsert({
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
  console.log(project);
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
