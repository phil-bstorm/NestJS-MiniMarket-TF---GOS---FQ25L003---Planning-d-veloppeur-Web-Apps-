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

  // eslint-disable-next-line @typescript-eslint/require-await
  async create(newProduct: any) {
    const product = {
      id: this.products.length + 1,
      name: newProduct.name,
      price: newProduct.price,
      discount: newProduct.discount,
      description: newProduct.description || '',
    };

    this.products.push(product);

    return product;
  }
}
