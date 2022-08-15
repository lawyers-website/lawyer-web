/*
  Warnings:

  - You are about to drop the `LawyerDetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LawyerDetails" DROP CONSTRAINT "LawyerDetails_lawyerId_fkey";

-- DropTable
DROP TABLE "LawyerDetails";

-- CreateTable
CREATE TABLE "lawyerDetails" (
    "id" TEXT NOT NULL,
    "lawyerId" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,

    CONSTRAINT "lawyerDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lawyerDetails_lawyerId_key" ON "lawyerDetails"("lawyerId");

-- AddForeignKey
ALTER TABLE "lawyerDetails" ADD CONSTRAINT "lawyerDetails_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
