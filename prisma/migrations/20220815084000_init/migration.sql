/*
  Warnings:

  - You are about to drop the `lawyerDetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "lawyerDetails" DROP CONSTRAINT "lawyerDetails_lawyerId_fkey";

-- DropTable
DROP TABLE "lawyerDetails";

-- CreateTable
CREATE TABLE "LawyerDetails" (
    "id" TEXT NOT NULL,
    "lawyerId" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,

    CONSTRAINT "LawyerDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LawyerDetails_lawyerId_key" ON "LawyerDetails"("lawyerId");

-- AddForeignKey
ALTER TABLE "LawyerDetails" ADD CONSTRAINT "LawyerDetails_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
