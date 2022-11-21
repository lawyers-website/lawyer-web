-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'FAILED', 'CONFORMED');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "orderStatus" "OrderStatus" NOT NULL DEFAULT 'PENDING';
