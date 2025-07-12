import { PrismaClient } from '@prisma/client';

const promoData = [
  {
    id: 1,
    price: 100,
    description: 'Promo de leche descremada en el mes de noviembre',
    startDate: new Date('2024-11-01'),
    endDate: new Date('2024-11-30'),
    productId: 1,
  },
  {
    id: 2,
    price: 200,
    description: 'Promo de queso de 1 kilo en el mes de diciembre',
    startDate: new Date('2024-12-01'),
    endDate: new Date('2024-12-31'),
    productId: 2,
  },
  {
    id: 3,
    price: 50,
    description: 'Promo de tomate por kilo en el mes de enero',
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-01-31'),
    productId: 3,
  },
  {
    id: 4,
    price: 150,
    description: 'Promo de leche descremada en el mes de febrero',
    startDate: new Date('2025-02-01'),
    endDate: new Date('2025-02-28'),
    productId: 1,
  },
  {
    id: 5,
    price: 90,
    description: 'Promo de manzana: 2 kilos por el precio de 1 en marzo',
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-03-31'),
    productId: 4,
  },
  {
    id: 6,
    price: 250,
    description: 'Promo de carne molida: 10% de descuento en abril',
    startDate: new Date('2025-04-01'),
    endDate: new Date('2025-04-30'),
    productId: 5,
  },
  {
    id: 7,
    price: 50,
    description: 'Promo de pan de molde: compra 2 y lleva 1 gratis en mayo',
    startDate: new Date('2025-05-01'),
    endDate: new Date('2025-05-31'),
    productId: 6,
  },
  {
    id: 8,
    price: 100,
    description: 'Promo de cerveza: compra 6 y lleva 1 gratis en junio',
    startDate: new Date('2025-06-01'),
    endDate: new Date('2025-06-30'),
    productId: 7,
  },
  {
    id: 9,
    price: 30,
    description: 'Promo de pasta: 3 paquetes por el precio de 2 en julio',
    startDate: new Date('2025-07-01'),
    endDate: new Date('2025-07-31'),
    productId: 8,
  },
  {
    id: 10,
    price: 25,
    description: 'Promo de galletas: 15% de descuento en agosto',
    startDate: new Date('2025-08-01'),
    endDate: new Date('2025-08-31'),
    productId: 10,
  },
];

export async function seedPromos(prisma: PrismaClient) {
  for (const promo of promoData) {
    await prisma.promo.upsert({
      where: { id: promo.id },
      update: {},
      create: promo,
    });
  }
}
