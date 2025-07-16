export class ProductDto {
  id: number;
  name: string;
  price: number;
  discount: number;
  description: string | null;
}

export class ProductListDto {
  id: number;
  name: string;
  price: number;
  discount: number;
}
