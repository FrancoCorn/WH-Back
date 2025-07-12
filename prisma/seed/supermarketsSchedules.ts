import { PrismaClient } from '@prisma/client';
import { randomInt } from 'crypto';

export async function seedSupermarketSchedules(prisma: PrismaClient) {
  const openingTime = randomInt(6, 12);
  const closingTime = randomInt(openingTime + 4, 24);

  async function seedSchedulesForSupermarket(supermarketId: number) {
    for (let day = 1; day <= 5; day++) {
      const id = supermarketId * 10 + day;
      await prisma.supermarketSchedule.upsert({
        where: { id: id },
        update: {},
        create: {
          supermarketId: supermarketId,
          day: day,
          open: openingTime,
          close: closingTime,
        },
      });
    }
  }

  for (let i = 1; i <= 6; i++) {
    await seedSchedulesForSupermarket(i);
  }
}
