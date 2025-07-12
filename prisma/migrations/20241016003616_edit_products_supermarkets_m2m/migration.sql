/*
  Warnings:

  - You are about to drop the column `supermarketId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_supermarketId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "supermarketId";

-- CreateTable
CREATE TABLE "_ProductToSupermarket" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToSupermarket_AB_unique" ON "_ProductToSupermarket"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToSupermarket_B_index" ON "_ProductToSupermarket"("B");

-- AddForeignKey
ALTER TABLE "_ProductToSupermarket" ADD CONSTRAINT "_ProductToSupermarket_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToSupermarket" ADD CONSTRAINT "_ProductToSupermarket_B_fkey" FOREIGN KEY ("B") REFERENCES "Supermarket"("id") ON DELETE CASCADE ON UPDATE CASCADE;
