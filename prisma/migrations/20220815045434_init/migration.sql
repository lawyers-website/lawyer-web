/*
  Warnings:

  - You are about to drop the `LaywerDetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LaywerDetails" DROP CONSTRAINT "LaywerDetails_lawyerId_fkey";

-- DropTable
DROP TABLE "LaywerDetails";

-- CreateTable
CREATE TABLE "LawyerDetails" (
    "id" SERIAL NOT NULL,
    "lawyerId" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "institution" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "experince" INTEGER NOT NULL,
    "graduatedOn" TEXT NOT NULL,

    CONSTRAINT "LawyerDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LawyerDetails_lawyerId_key" ON "LawyerDetails"("lawyerId");

-- AddForeignKey
ALTER TABLE "LawyerDetails" ADD CONSTRAINT "LawyerDetails_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
