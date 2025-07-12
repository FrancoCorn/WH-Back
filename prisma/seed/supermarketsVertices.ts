import { Prisma, PrismaClient } from '@prisma/client';

const supermarketsVertices: Prisma.SupermarketVerticesUncheckedCreateInput[][] = [
  [
    // Pasillo superior
    { id: 8, supermarketId: 1, location_x: 80, location_y: 90 },
    { id: 9, supermarketId: 1, location_x: 295, location_y: 90 },
    { id: 10, supermarketId: 1, location_x: 510, location_y: 90 },
    { id: 11, supermarketId: 1, location_x: 730, location_y: 90 },
    { id: 12, supermarketId: 1, location_x: 950, location_y: 90 },
    { id: 13, supermarketId: 1, location_x: 1170, location_y: 90 },
    { id: 14, supermarketId: 1, location_x: 1380, location_y: 90 },

    // Pasillo central
    { id: 1, supermarketId: 1, location_x: 80, location_y: 470 },
    { id: 2, supermarketId: 1, location_x: 295, location_y: 470 },
    { id: 3, supermarketId: 1, location_x: 510, location_y: 470 },
    { id: 4, supermarketId: 1, location_x: 730, location_y: 470 },
    { id: 5, supermarketId: 1, location_x: 950, location_y: 470 },
    { id: 6, supermarketId: 1, location_x: 1170, location_y: 470 },
    { id: 7, supermarketId: 1, location_x: 1380, location_y: 470 },

    // Pasillo inferior
    { id: 15, supermarketId: 1, location_x: 85, location_y: 850 },
    { id: 16, supermarketId: 1, location_x: 295, location_y: 850 },
    { id: 17, supermarketId: 1, location_x: 510, location_y: 850 },
    { id: 18, supermarketId: 1, location_x: 730, location_y: 850 },
    { id: 19, supermarketId: 1, location_x: 950, location_y: 850 },
    { id: 20, supermarketId: 1, location_x: 1170, location_y: 850 },
    { id: 21, supermarketId: 1, location_x: 1380, location_y: 850 },

    // Lugares especiales
    { id: 22, supermarketId: 1, location_x: 295, location_y: 1010 },  // Caja
    { id: 23, supermarketId: 1, location_x: 730, location_y: 1000 }   // Entrada
  ],

];

export async function seedSupermarketsVertices(prisma: PrismaClient) {
  await prisma.supermarketVertices.deleteMany({});
  for (const supermarketVertices of supermarketsVertices) {
    for (const vertex of supermarketVertices) {
      await prisma.supermarketVertices.create({
        data: {
          id: vertex.id,
          supermarketId: vertex.supermarketId,
          location_x: vertex.location_x,
          location_y: vertex.location_y
        },
      });
    }
    await prisma.supermarket.update({
      where: { id: supermarketVertices[supermarketVertices.length - 1].supermarketId },
      data: {
        entranceId: supermarketVertices[supermarketVertices.length - 1].id,
        checkoutId: supermarketVertices[supermarketVertices.length - 2].id
      },
    });
  }
}
