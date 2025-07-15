import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductService } from 'src/services/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAll() {
    return this.productService.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this.productService.getById(id);
  }
}
