import { PrismaClient } from '@prisma/client';

const categories = [
  { id: 1, name: 'Lacteos' },
  { id: 2, name: 'Verduras' },
  { id: 3, name: 'Frutas' },
  { id: 4, name: 'Bebidas' },
  { id: 5, name: 'Carnes' },
  { id: 6, name: 'Panaderia' },
  { id: 7, name: 'Congelados' },
  { id: 8, name: 'Limpieza' },
  { id: 9, name: 'Despensa' },
  { id: 10, name: 'Cereales' },
  { id: 11, name: 'Snacks' },
  { id: 12, name: 'Salsas' },
  { id: 13, name: 'Productos Naturales' },
  { id: 14, name: 'Bebidas Alcohólicas' },
  { id: 15, name: 'Comida Preparada' },
  { id: 16, name: 'Electrodomésticos' },
  { id: 17, name: 'Productos enlatados' },
];

export async function seedCategories(prisma: PrismaClient) {
  for (const category of categories) {
    await prisma.category.upsert({
      where: { id: category.id },
      update: {},
      create: {
        name: category.name,
      },
    });
  }
}
