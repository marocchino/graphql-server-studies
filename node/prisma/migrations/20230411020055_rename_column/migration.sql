/*
  Warnings:

  - You are about to drop the column `dueOn` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "dueOn",
ADD COLUMN     "due_on" TIMESTAMP(3);
