import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { SupermarketModule } from './supermarket/supermarket.module';

@Module({
  imports: [
    ProductModule,
    PrismaModule,
    SupermarketModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
