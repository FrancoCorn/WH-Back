import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productsService: ProductService) { }

  @Get()
  async getAllProducts(
    @Query('supermarketId', ParseIntPipe) supermarketId: number,
  ) {
    return this.productsService.getAll(supermarketId);
  }

  @Get('search/name')
  async searchByName(
    @Query('supermarketId', ParseIntPipe) supermarketId: number,
    @Query('query') name: string,
  ) {
    return this.productsService.findByName(supermarketId, name);
  }

  @Get('category')
  async getAllCategories(
    @Query('supermarketId', ParseIntPipe) supermarketId: number,
  ) {
    return this.productsService.getAllCategories(supermarketId);
  }

  @Get(':supermarketId/:productId')
  async getProductById(
    @Param('supermarketId', ParseIntPipe) supermarketId: number,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.productsService.getProductById(supermarketId, productId);
  }
}
