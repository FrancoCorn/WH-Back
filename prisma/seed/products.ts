import { PrismaClient } from '@prisma/client';

const productData = [
  {
    id: 1,
    name: 'Leche Descremada',
    description: 'Leche descremada de 1 litro',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/760437-1200-auto?v=638049118084400000&width=1200&height=auto&aspect=true',
    categoryId: 1,
  },
  {
    id: 2,
    name: 'Queso',
    description: 'Queso de 1 kilo',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/594326-1200-auto?v=637305532902770000&width=1200&height=auto&aspect=true',
    categoryId: 1,
  },
  {
    id: 3,
    name: 'Tomate',
    description: 'Tomate por kilo',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/178625-1200-auto?v=636383367219370000&width=1200&height=auto&aspect=true',
    categoryId: 2,
  },
  {
    id: 4,
    name: 'Manzana',
    description: 'Manzana por kilo',
    image: 'https://www.google.com.ar',
    categoryId: 3,
  },
  {
    id: 5,
    name: 'Carne Molida',
    description: 'Carne molida de res por kilo',
    image: 'https://www.google.com.ar',
    categoryId: 5,
  },
  {
    id: 6,
    name: 'Pan de Molde',
    description: 'Pan de molde fresco',
    image: 'https://www.google.com.ar',
    categoryId: 6,
  },
  {
    id: 7,
    name: 'Cerveza',
    description: 'Cerveza artesanal por botella',
    image: 'https://www.google.com.ar',
    categoryId: 4,
  },
  {
    id: 8,
    name: 'Pasta',
    description: 'Pasta seca por paquete',
    image: 'https://www.google.com.ar',
    categoryId: 9,
  },
  {
    id: 9,
    name: 'Arroz',
    description: 'Arroz blanco por kilo',
    image: 'https://www.google.com.ar',
    categoryId: 9,
  },
  {
    id: 10,
    name: 'Galletas',
    description: 'Galletas surtidas por paquete',
    image: 'https://www.google.com.ar',
    categoryId: 11,
  },
  {
    id: 11,
    name: 'La Serenisima Leche Descremada sachet 1L',
    description: 'Leche descremada de 1 litro',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/760437-1200-auto?v=638049118084400000&width=1200&height=auto&aspect=true',
    categoryId: 1,
  },
  {
    id: 12,
    name: 'La Paulina Queso Cremoso 1kg',
    description: 'Queso de 1 kilo',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/594326-1200-auto?v=637305532902770000&width=1200&height=auto&aspect=true',
    categoryId: 1,
  },
  {
    id: 13,
    name: 'La Serenisima Leche Zerolact Bot 1L',
    description: 'Leche zero lactoza de 1 litro',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/797316-1200-auto?v=638332509824430000&width=1200&height=auto&aspect=true',
    categoryId: 1,
  },
  {
    id: 14,
    name: 'Leche Uat La Serenisima Proteina 1L',
    description: 'Leche larga vida 50% mas proteina de 1 litro',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/637500-1200-auto?v=637540537556030000&width=1200&height=auto&aspect=true',
    categoryId: 1,
  },
  {
    id: 15,
    name: 'Cindor Leche Chocolatada 1L',
    description: 'Leche chocolatada de 1 litro',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/827421-1200-auto?v=638558014542000000&width=1200&height=auto&aspect=true',
    categoryId: 1,
  },
  {
    id: 16,
    name: 'Yogurisimo Yogur Griego Yogurisimo Frutillas A La Crema 125g',
    description: 'Yogur estilo griego sabor frutillas a la crema de 125g',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/827420-1200-auto?v=638558014537300000&width=1200&height=auto&aspect=true',
    categoryId: 1,
  },
  {
    id: 17,
    name: 'La Serenisima Dulce De Leche Colonial 400g',
    description: 'Dulce de leche estilo colonial de 400g',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/787500-1200-auto?v=638242545907870000&width=1200&height=auto&aspect=true',
    categoryId: 1,
  },
  {
    id: 18,
    name: 'La Serenisima Manteca Bienestar Animal 200g',
    description: 'Manteca clasica de 200g',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/793456-1200-auto?v=638303241666030000&width=1200&height=auto&aspect=true',
    categoryId: 1,
  },
  {
    id: 19,
    name: 'Ser Yogur Batido Natural Sin Endulzar 175g',
    description: 'Yogur batido natural de 175g',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/837198-1200-auto?v=638635017761930000&width=1200&height=auto&aspect=true',
    categoryId: 1,
  },
  {
    id: 20,
    name: 'Milkaut Crema De Leche Milkaut Doble 200ml',
    description: 'Crema de leche de 200ml',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/789385-1200-auto?v=638264361752170000&width=1200&height=auto&aspect=true',
    categoryId: 1,
  },
  {
    id: 21,
    name: 'Suprema De Pollo Granel Fresca',
    description: 'Suprema de pollo X kg',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/825742-1200-auto?v=638539675411130000&width=1200&height=auto&aspect=true',
    categoryId: 5,
  },
  {
    id: 22,
    name: 'Lomo Premium',
    description: 'Lomo La Hacienda X kg',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/826406-1200-auto?v=638551857692300000&width=1200&height=auto&aspect=true',
    categoryId: 5,
  },
  {
    id: 23,
    name: 'Carre De Cerdo Con Hueso Fresco',
    description: 'Carre De Cerdo Con Hueso Fresco X kg',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/720670-1200-auto?v=637992957932800000&width=1200&height=auto&aspect=true',
    categoryId: 5,
  },
  {
    id: 24,
    name: 'Skip Jabon liquido 500ml',
    description: 'Jabón Líquido para Diluir Bio-Enzimas 500ml Skip',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/845507-1200-auto?v=638666880838070000&width=1200&height=auto&aspect=true',
    categoryId: 8,
  },
  {
    id: 25,
    name: 'Higienol Papel Higiénico Max Hoja Simple',
    description: 'Papel Higiénico Higienol Max Hoja Simple - 100 M X 4 U',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/844200-1200-auto?v=638660829746170000&width=1200&height=auto&aspect=true',
    categoryId: 8,
  },
  {
    id: 26,
    name: 'Off! Extra Duración 170ml',
    description: 'Repelente Para Mosquitos Off! Extra Duración Aerosol 170ml',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/717163-1200-auto?v=637980754500470000&width=1200&height=auto&aspect=true',
    categoryId: 8,
  },
  {
    id: 27,
    name: 'Daewoo Horno Electrico',
    description: 'Horno Electrico Dw-3000eb 25L - 1500 W Daewoo',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/687378-1200-auto?v=637796409454470000&width=1200&height=auto&aspect=true',
    categoryId: 16,
  },
  {
    id: 28,
    name: 'Samsung Smart Tv 50 4K UHD',
    description: 'Smart Tv 50 4K UHD Un50cu7000. Samsung',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/823776-1200-auto?v=638508658396370000&width=1200&height=auto&aspect=true',
    categoryId: 16,
  },
  {
    id: 29,
    name: 'Corona Rubia 330ml',
    description: 'Cerveza Rubia 330ml Corona',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/655329-1200-auto?v=637608786169330000&width=1200&height=auto&aspect=true',
    categoryId: 14,
  },
  {
    id: 30,
    name: 'La Linda Malbec 750ml',
    description: 'Vino finca La Linda Malbec 750ml',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/716605-1200-auto?v=637973734685200000&width=1200&height=auto&aspect=true',
    categoryId: 14,
  },
  {
    id: 31,
    name: 'Manzana',
    description: 'Manzana X kg',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/472481-1200-auto?v=636694698370130000&width=1200&height=auto&aspect=true',
    categoryId: 3,
  },
  {
    id: 32,
    name: 'Banana',
    description: 'Banana X kg',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/790316-1200-auto?v=638272137671900000&width=1200&height=auto&aspect=true',
    categoryId: 3,
  },
  {
    id: 33,
    name: 'Naranja',
    description: 'Naranja X kg',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/716248-1200-auto?v=637969629832570000&width=1200&height=auto&aspect=true',
    categoryId: 3,
  },

  {
    id: 34,
    name: 'Cebolla',
    description: 'Cebolla X kg',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/698610-1200-auto?v=637871997724330000&width=1200&height=auto&aspect=true',
    categoryId: 2,
  },
  {
    id: 35,
    name: 'Zanahoria',
    description: 'Zanahoria X kg',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/472800-1200-auto?v=636695562251270000&width=1200&height=auto&aspect=true',
    categoryId: 2,
  },
  {
    id: 36,
    name: 'Pimiento rojo',
    description: 'Pimiento rojo X kg',
    image:
      'https://jumboargentina.vtexassets.com/arquivos/ids/339349-1200-auto?v=636393041930400000&width=1200&height=auto&aspect=true',
    categoryId: 2,
  },

];

export async function seedProducts(prisma: PrismaClient) {
  for (const product of productData) {
    await prisma.product.upsert({
      where: { id: product.id },
      update: product,
      create: product,
    });
  }
}
