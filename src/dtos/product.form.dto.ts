import { IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class ProductCreateFormDto {
  @IsString()
  @MinLength(5)
  @MaxLength(100)
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  discount: number;

  @IsString()
  @IsOptional()
  description?: string;
}

export class ProductUpdateFormDto {
  @IsString()
  @IsOptional()
  @MinLength(5)
  @MaxLength(100)
  name?: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  price?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(100)
  discount?: number;

  @IsString()
  @IsOptional()
  description?: string;
}
