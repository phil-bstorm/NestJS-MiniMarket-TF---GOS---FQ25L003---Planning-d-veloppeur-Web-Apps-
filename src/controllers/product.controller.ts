import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductCreateFormDto, ProductUpdateFormDto } from 'src/dtos/product.form.dto';
import { productCreateFormDtoToEntity, productEntityToProductDto, productEntityToProductListDto, productUpdateFormDtoToEntity } from 'src/mappers/product.mappers';
import { ProductService } from 'src/services/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAll() {
    const products = await this.productService.getAll();
    return products.map(productEntityToProductListDto);
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const product = await this.productService.getById(id);
    return productEntityToProductDto(product);
  }

  @Post()
  async create(@Body() body: ProductCreateFormDto) {
    const product = productCreateFormDtoToEntity(body);
    const newProduct = await this.productService.create(product);
    return productEntityToProductDto(newProduct);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const deletedProduct = await this.productService.delete(id);
    return productEntityToProductDto(deletedProduct);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() body: ProductUpdateFormDto) {
    const existingProduct = await this.productService.getById(id);
    const product = productUpdateFormDtoToEntity(body, existingProduct);
    const updatedProduct = await this.productService.update(product);
    return productEntityToProductDto(updatedProduct);
  }
}
