import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async getAll() {
    return this.productRepository.find();
  }

  async getById(id: number) {
    const existingProduct = await this.productRepository.findOne({ where: { id } });

    if (!existingProduct) {
      throw new Error('Product not found');
    }

    return existingProduct;
  }

  async create(newProduct: ProductEntity) {
    return this.productRepository.save(newProduct);
  }

  async delete(id: number) {
    const existingProduct = await this.productRepository.findOne({ where: { id } });

    if (!existingProduct) {
      throw new Error('Product not found');
    }
    await this.productRepository.remove(existingProduct);
    return existingProduct;
  }

  async update(updatedProduct: ProductEntity) {
    return this.productRepository.save(updatedProduct);
  }
}
