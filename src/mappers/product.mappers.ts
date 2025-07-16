import { ProductDto, ProductListDto } from 'src/dtos/product.dto';
import { ProductCreateFormDto, ProductUpdateFormDto } from 'src/dtos/product.form.dto';
import { ProductEntity } from 'src/entities/product.entity';

// DTO -> Entity

export function productCreateFormDtoToEntity(dto: ProductCreateFormDto): ProductEntity {
  const product = new ProductEntity();
  product.name = dto.name;
  product.price = dto.price;
  product.discount = dto.discount;
  product.description = dto.description ?? null;

  return product;
}

export function productUpdateFormDtoToEntity(dto: ProductUpdateFormDto, entity: ProductEntity) {
  if (dto.name !== undefined) {
    entity.name = dto.name;
  }
  if (dto.price !== undefined) {
    entity.price = dto.price;
  }
  if (dto.discount !== undefined) {
    entity.discount = dto.discount;
  }
  if (dto.description !== undefined) {
    entity.description = dto.description;
  }

  return entity;
}

// Entity -> DTO

export function productEntityToProductDto(entity: ProductEntity): ProductDto {
  return {
    id: entity.id,
    name: entity.name,
    description: entity.description,
    price: entity.price,
    discount: entity.discount,
  };
}

export function productEntityToProductListDto(entity: ProductEntity): ProductListDto {
  return {
    id: entity.id,
    name: entity.name,
    price: entity.price,
    discount: entity.discount,
  };
}
