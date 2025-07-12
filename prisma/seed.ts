import { PrismaClient } from '@prisma/client';
import { seedCategories } from './seed/categories';
import { seedProducts } from './seed/products';
import { seedPromos } from './seed/promos';
import { seedSupermarkets } from './seed/supermarkets';
import { seedSupermarketSchedules } from './seed/supermarketsSchedules';
import { seedProductsToSupermarkets } from './seed/productsToSupermarkets';
import { seedSupermarketsVertices } from './seed/supermarketsVertices';
import { seedSupermarketsPaths } from './seed/supermarketsPaths';
const prisma = new PrismaClient();

async function main() {
  await seedSupermarkets(prisma);
  await seedCategories(prisma);
  await seedProducts(prisma);
  await seedPromos(prisma);
  await seedSupermarketSchedules(prisma);
  await seedProductsToSupermarkets(prisma);
  await seedSupermarketsVertices(prisma);
  await seedSupermarketsPaths(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
