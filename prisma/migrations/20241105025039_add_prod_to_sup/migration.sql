/*
  Warnings:

  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `_ProductToSupermarket` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductToSupermarket" DROP CONSTRAINT "_ProductToSupermarket_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToSupermarket" DROP CONSTRAINT "_ProductToSupermarket_B_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "price",
DROP COLUMN "stock";

-- DropTable
DROP TABLE "_ProductToSupermarket";

-- CreateTable
CREATE TABLE "ProductsToSupermarkets" (
    "supermarketId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ProductsToSupermarkets_pkey" PRIMARY KEY ("supermarketId","productId")
);

-- AddForeignKey
ALTER TABLE "ProductsToSupermarkets" ADD CONSTRAINT "ProductsToSupermarkets_supermarketId_fkey" FOREIGN KEY ("supermarketId") REFERENCES "Supermarket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsToSupermarkets" ADD CONSTRAINT "ProductsToSupermarkets_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
