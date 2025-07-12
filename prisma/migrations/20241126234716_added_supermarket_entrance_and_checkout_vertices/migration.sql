/*
  Warnings:

  - A unique constraint covering the columns `[entranceId]` on the table `Supermarket` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[checkoutId]` on the table `Supermarket` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Supermarket" ADD COLUMN     "checkoutId" INTEGER,
ADD COLUMN     "entranceId" INTEGER;

-- AlterTable
ALTER TABLE "SupermarketVertices" ADD COLUMN     "checkoutId" INTEGER,
ADD COLUMN     "entranceId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Supermarket_entranceId_key" ON "Supermarket"("entranceId");

-- CreateIndex
CREATE UNIQUE INDEX "Supermarket_checkoutId_key" ON "Supermarket"("checkoutId");

-- AddForeignKey
ALTER TABLE "Supermarket" ADD CONSTRAINT "Supermarket_entranceId_fkey" FOREIGN KEY ("entranceId") REFERENCES "SupermarketVertices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supermarket" ADD CONSTRAINT "Supermarket_checkoutId_fkey" FOREIGN KEY ("checkoutId") REFERENCES "SupermarketVertices"("id") ON DELETE SET NULL ON UPDATE CASCADE;
