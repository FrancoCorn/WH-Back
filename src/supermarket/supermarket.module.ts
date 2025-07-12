import { Module } from '@nestjs/common';
import { SupermarketController } from './supermarket.controller';
import { SupermarketService } from './supermarket.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SupermarketController],
  providers: [SupermarketService]
})
export class SupermarketModule {}
