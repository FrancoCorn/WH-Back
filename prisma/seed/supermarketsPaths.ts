import { Prisma, PrismaClient } from '@prisma/client';

const supermarketsPaths: Prisma.SupermarketPathsUncheckedCreateInput[] = [
  // Conexiones entrada
  { vertexIdFrom: 23, vertexIdTo: 15 },
  { vertexIdFrom: 23, vertexIdTo: 16 },
  { vertexIdFrom: 23, vertexIdTo: 17 },
  { vertexIdFrom: 23, vertexIdTo: 18 },
  { vertexIdFrom: 23, vertexIdTo: 19 },
  { vertexIdFrom: 23, vertexIdTo: 20 },
  { vertexIdFrom: 23, vertexIdTo: 21 },

  // Conexiones cajas
  { vertexIdFrom: 22, vertexIdTo: 15},
  { vertexIdFrom: 22, vertexIdTo: 16},
  { vertexIdFrom: 22, vertexIdTo: 17},
  { vertexIdFrom: 22, vertexIdTo: 18},
  { vertexIdFrom: 22, vertexIdTo: 19},
  { vertexIdFrom: 22, vertexIdTo: 20},
  { vertexIdFrom: 22, vertexIdTo: 21},



  // Pasillo central
  { vertexIdFrom: 1, vertexIdTo: 2 },
  { vertexIdFrom: 2, vertexIdTo: 3 },
  { vertexIdFrom: 3, vertexIdTo: 4 },
  { vertexIdFrom: 4, vertexIdTo: 5 },
  { vertexIdFrom: 5, vertexIdTo: 6 },
  { vertexIdFrom: 6, vertexIdTo: 7 },

  // Pasillo superior
  { vertexIdFrom: 8, vertexIdTo: 9 },
  { vertexIdFrom: 9, vertexIdTo: 10 },
  { vertexIdFrom: 10, vertexIdTo: 11 },
  { vertexIdFrom: 11, vertexIdTo: 12 },
  { vertexIdFrom: 12, vertexIdTo: 13 },
  { vertexIdFrom: 13, vertexIdTo: 14 },

  // Pasillo inferior
  { vertexIdFrom: 15, vertexIdTo: 16 },
  { vertexIdFrom: 16, vertexIdTo: 17 },
  { vertexIdFrom: 17, vertexIdTo: 18 },
  { vertexIdFrom: 18, vertexIdTo: 19 },
  { vertexIdFrom: 19, vertexIdTo: 20 },
  { vertexIdFrom: 20, vertexIdTo: 21 },

  // Pasillo superior a central
  { vertexIdFrom: 1, vertexIdTo: 8 },
  { vertexIdFrom: 9, vertexIdTo: 2 },
  { vertexIdFrom: 10, vertexIdTo: 3 },
  { vertexIdFrom: 11, vertexIdTo: 4 },
  { vertexIdFrom: 12, vertexIdTo: 5 },
  { vertexIdFrom: 13, vertexIdTo: 6 },
  { vertexIdFrom: 14, vertexIdTo: 7 },

  // Pasillo inferior a central
  { vertexIdFrom: 15, vertexIdTo: 1 },
  { vertexIdFrom: 16, vertexIdTo: 2 },
  { vertexIdFrom: 17, vertexIdTo: 3 },
  { vertexIdFrom: 18, vertexIdTo: 4 },
  { vertexIdFrom: 19, vertexIdTo: 5 },
  { vertexIdFrom: 20, vertexIdTo: 6 },
  { vertexIdFrom: 21, vertexIdTo: 7 }
];

export async function seedSupermarketsPaths(prisma: PrismaClient) {
  await prisma.supermarketPaths.deleteMany({});
  for (const path of supermarketsPaths) {
    await prisma.supermarketPaths.create({
      data: {
        vertexIdFrom: path.vertexIdFrom,
        vertexIdTo: path.vertexIdTo
      },
    });
  }
}
