/*
  Warnings:

  - The primary key for the `LawyerDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "LawyerDetails" DROP CONSTRAINT "LawyerDetails_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "LawyerDetails_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "LawyerDetails_id_seq";
