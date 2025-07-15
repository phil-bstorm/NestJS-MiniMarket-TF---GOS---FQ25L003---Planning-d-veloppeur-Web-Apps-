import { Injectable } from '@nestjs/common';
import { log } from 'console';

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

  async delete(id: number) {
    const index = this.products.findIndex((p) => p.id === id);

    // fonction aussi avec index == -1
    if (index < 0) {
      throw new Error('Produit non trouvé!');
    }

    const deleted = this.products.splice(index, 1)[0];
    return deleted;
  }

  async update(updatedProduct: any) {
    const product = this.products.find((p) => p.id === updatedProduct.id);

    if (!product) {
      throw new Error('Produit non trouvé!');
    }
    product.name = updatedProduct.name || product.name;
    product.price = updatedProduct.price || product.price;
    product.discount = updatedProduct.discount || product.discount;

    if (updatedProduct.description !== undefined) {
      product.description = updatedProduct.description;
    }

    return product;
  }
}
