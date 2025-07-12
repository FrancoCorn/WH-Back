import { PrismaClient, ProductsToSupermarkets } from '@prisma/client';

const productToSupermarket: ProductsToSupermarkets[] = [
  /*{
    price: 1000,
    productId: 3,
    stock: 1000000,
    supermarketId: 1,
    location_x: 247,
    location_y: 580
  },
  {
    price: 321,
    productId: 2,
    stock: 1300,
    supermarketId: 1,
    location_x: 556,
    location_y: 380
  },
  {
    price: 5255,
    productId: 1,
    stock: 0,
    supermarketId: 1,
    location_x: 556,
    location_y: 190
  },*/
  

  {
    price: 1650,
    productId: 11,
    stock: 0,
    supermarketId: 1,
    location_x: 470,
    location_y: 600
  },
  {
    price: 10449,
    productId: 12,
    stock: 1300,
    supermarketId: 1,
    location_x: 470,
    location_y: 320
  },
  {
    price: 2499,
    productId: 13,
    stock: 564,
    supermarketId: 1,
    location_x: 556,
    location_y: 192
  },/*
  {
    price: 2549,
    productId: 14,
    stock: 350,
    supermarketId: 1,
    location_x: 556,
    location_y: 192
  },*/
  {
    price: 5299,
    productId: 15,
    stock: 785,
    supermarketId: 1,
    location_x: 470,
    location_y: 215
  },
  {
    price: 2399,
    productId: 16,
    stock: 745,
    supermarketId: 1,
    location_x: 556,
    location_y: 240
  },
  {
    price: 3799,
    productId: 17,
    stock: 0,
    supermarketId: 1,
    location_x: 470,
    location_y: 280
  },/*
  {
    price: 3699,
    productId: 18,
    stock: 362,
    supermarketId: 1,
    location_x: 556,
    location_y: 387
  },*/
  {
    price: 1959,
    productId: 19,
    stock: 332,
    supermarketId: 1,
    location_x: 556,
    location_y: 340
  },
  {
    price: 2699,
    productId: 20,
    stock: 932,
    supermarketId: 1,
    location_x: 470,
    location_y: 389
  },
  {
    price: 8239,
    productId: 21,
    stock: 56,
    supermarketId: 1,
    location_x: 904,
    location_y: 350
  },
  {
    price: 25399,
    productId: 22,
    stock: 46,
    supermarketId: 1,
    location_x: 996,
    location_y: 380
  },
  {
    price: 5799,
    productId: 23,
    stock: 67,
    supermarketId: 1,
    location_x: 996,
    location_y: 750
  },
  {
    price: 8950,
    productId: 24,
    stock: 785,
    supermarketId: 1,
    location_x: 684,
    location_y: 760
  },
  {
    price: 6507,
    productId: 25,
    stock: 585,
    supermarketId: 1,
    location_x: 776,
    location_y: 700
  },
  {
    price: 6550,
    productId: 26,
    stock: 185,
    supermarketId: 1,
    location_x: 776,
    location_y: 650
  },
  {
    price: 189999,
    productId: 27,
    stock: 7,
    supermarketId: 1,
    location_x: 1124,
    location_y: 650
  },
  {
    price: 659999,
    productId: 28,
    stock: 14,
    supermarketId: 1,
    location_x: 1216,
    location_y: 210
  },
  {
    price: 3143,
    productId: 29,
    stock: 365,
    supermarketId: 1,
    location_x: 126,
    location_y: 730
  },
  {
    price: 7850,
    productId: 30,
    stock: 105,
    supermarketId: 1,
    location_x: 126,
    location_y: 210
  },
  {
    price: 599,
    productId: 34,
    stock: 65,
    supermarketId: 1,
    location_x: 249,
    location_y: 210
  },
  {
    price: 1499,
    productId: 35,
    stock: 84,
    supermarketId: 1,
    location_x: 341,
    location_y: 190
  },
  {
    price: 4299,
    productId: 36,
    stock: 0,
    supermarketId: 1,
    location_x: 341,
    location_y: 300
  },
  {
    price: 2399,
    productId: 31,
    stock: 69,
    supermarketId: 1,
    location_x: 249,
    location_y: 750
  },
  {
    price: 2499,
    productId: 32,
    stock: 49,
    supermarketId: 1,
    location_x: 341,
    location_y: 750
  },
  {
    price: 1699,
    productId: 33,
    stock: 74,
    supermarketId: 1,
    location_x: 249,
    location_y: 690
  },

];

export async function seedProductsToSupermarkets(prisma: PrismaClient) {
  for (const productMap of productToSupermarket) {
    await prisma.productsToSupermarkets.upsert({
      create: productMap,
      update: productMap,
      where: {
        supermarketId_productId: {
          supermarketId: productMap.supermarketId,
          productId: productMap.productId,
        },
      },
    });
  }
}
