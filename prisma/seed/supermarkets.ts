import { Prisma, PrismaClient } from '@prisma/client';

const supermarkets: Prisma.SupermarketUncheckedCreateInput[] = [
  {
    id: 1,
    name: 'Coto Avellaneda',
    address: 'Avenida Mitre 200, Avellaneda',
    latitude: -34.666,
    longitude: -58.371,
  },
  {
    id: 2,
    name: 'Carrefour Quilmes',
    address: 'Avenida Vicente López 1500, Quilmes',
    latitude: -34.724,
    longitude: -58.249,
  },
  {
    id: 3,
    name: 'Dia San Telmo',
    address: 'Avenida Caseros 1600, San Telmo',
    latitude: -34.634,
    longitude: -58.375,
  },
  {
    id: 4,
    name: 'Disco Palermo',
    address: 'Avenida Santa Fe 4000, Palermo',
    latitude: -34.592,
    longitude: -58.423,
  },
  {
    id: 5,
    name: 'Walmart Avellaneda',
    address: 'Calle Pichincha 400, Avellaneda',
    latitude: -34.678,
    longitude: -58.357,
  },
  {
    id: 6,
    name: 'Vea Belgrano',
    address: 'Avenida Cabildo 3000, Belgrano',
    latitude: -34.57,
    longitude: -58.445,
  },
];

export async function seedSupermarkets(prisma: PrismaClient) {
  for (const market of supermarkets) {
    await prisma.supermarket.upsert({
      where: { id: market.id },
      update: market,
      create: market
    });
  }
}
