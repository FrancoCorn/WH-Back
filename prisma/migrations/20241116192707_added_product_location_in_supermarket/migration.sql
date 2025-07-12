/*
  Warnings:

  - Added the required column `location_x` to the `ProductsToSupermarkets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_y` to the `ProductsToSupermarkets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductsToSupermarkets" ADD COLUMN     "location_x" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "location_y" DOUBLE PRECISION NOT NULL;
