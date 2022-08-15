/*
  Warnings:

  - You are about to drop the column `experince` on the `LawyerDetails` table. All the data in the column will be lost.
  - Added the required column `experience` to the `LawyerDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LawyerDetails" DROP COLUMN "experince",
ADD COLUMN     "experience" INTEGER NOT NULL;
