/*
  Warnings:

  - Added the required column `country` to the `LawyerDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `LawyerDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expertise` to the `LawyerDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `LawyerDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `services` to the `LawyerDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `LawyerDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LawyerDetails" ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "expertise" TEXT NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "numofreviews" INTEGER DEFAULT 0,
ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "rating" INTEGER DEFAULT 0,
ADD COLUMN     "services" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Reviews" (
    "id" TEXT NOT NULL,
    "lawyerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userName" TEXT,
    "rating" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "LawyerDetails"("lawyerId") ON DELETE CASCADE ON UPDATE CASCADE;
