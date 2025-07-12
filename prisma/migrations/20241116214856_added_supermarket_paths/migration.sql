-- CreateTable
CREATE TABLE "SupermarketVertices" (
    "id" SERIAL NOT NULL,
    "supermarketId" INTEGER NOT NULL,
    "location_x" DOUBLE PRECISION NOT NULL,
    "location_y" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SupermarketVertices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupermarketPaths" (
    "vertexIdFrom" INTEGER NOT NULL,
    "vertexIdTo" INTEGER NOT NULL,

    CONSTRAINT "SupermarketPaths_pkey" PRIMARY KEY ("vertexIdFrom","vertexIdTo")
);

-- AddForeignKey
ALTER TABLE "SupermarketVertices" ADD CONSTRAINT "SupermarketVertices_supermarketId_fkey" FOREIGN KEY ("supermarketId") REFERENCES "Supermarket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupermarketPaths" ADD CONSTRAINT "SupermarketPaths_vertexIdFrom_fkey" FOREIGN KEY ("vertexIdFrom") REFERENCES "SupermarketVertices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupermarketPaths" ADD CONSTRAINT "SupermarketPaths_vertexIdTo_fkey" FOREIGN KEY ("vertexIdTo") REFERENCES "SupermarketVertices"("id") ON DELETE CASCADE ON UPDATE CASCADE;
