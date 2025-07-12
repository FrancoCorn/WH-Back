import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) { }

  async getAll(supermarketId: number) {
    const products = await this.prismaService.product.findMany({
      where: {
        supermarkets: {
          some: { supermarketId },
        },
      },
      include: {
        supermarkets: {
          where: {
            supermarketId,
          },
        },
      },
    });
    return products.map((product) => {
      const { price, stock, location_x, location_y } = product.supermarkets[0] || {
        price: null,
        stock: null,
        location_x: null,
        location_y: null,
      };
      return {
        ...product,
        price,
        stock,
        location_x,
        location_y,
        supermarkets: undefined, // Eliminamos el array `supermarkets`
      };
    });
  }

  async findByName(supermarketId: number, name: string) {
    const products = await this.prismaService.product.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
        supermarkets: {
          some: { supermarketId },
        },
      },
      include: {
        supermarkets: {
          where: {
            supermarketId,
          },
          select: {
            price: true,
            stock: true,
          },
        },
      },
    });

    // Transformamos los datos para mover `price` y `stock` al nivel superior
    return products.map((product) => {
      const { price, stock } = product.supermarkets[0] || {
        price: null,
        stock: null,
      };
      return {
        ...product,
        price,
        stock,
        supermarkets: undefined, // Eliminamos el array `supermarkets`
      };
    });
  }

  async findByCategoryName(supermarketId: number, categoryName: string) {
    return this.prismaService.product.findMany({
      where: {
        category: {
          name: {
            startsWith: categoryName,
            mode: 'insensitive',
          },
        },
        supermarkets: { some: { supermarketId } },
      },
    });
  }
  async getProductById(supermarketId: number, productId: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id: productId },
      include: {
        supermarkets: {
          where: { supermarketId },
          select: {
            price: true,
            stock: true,
          },
        },
      },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    const { price, stock } = product.supermarkets[0] || {
      price: null,
      stock: null,
    };

    return {
      ...product,
      price,
      stock,
      supermarkets: undefined,
    };
  }

  async getAllCategories(supermarketId: number) {
    return this.prismaService.category.findMany({
      where: {
        products: {
          some: {
            supermarkets: {
              some: {
                supermarketId: supermarketId
              }
            }
          }
        }
      }
    })
  }
}
