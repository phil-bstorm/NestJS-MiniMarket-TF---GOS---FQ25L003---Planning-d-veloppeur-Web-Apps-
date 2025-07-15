import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  products = [
    {
      id: 1,
      name: 'Fraise',
      price: 5,
      discount: 50,
      description: 'De belles fraises rouge!',
    },
  ];

  // eslint-disable-next-line @typescript-eslint/require-await
  async getAll() {
    return this.products;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async getById(id: number) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new Error('Produit non trouvé!');
    }

    return product;
  }
}
