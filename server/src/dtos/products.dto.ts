import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  public manufacturer: string;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  public category: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  public attributes: string;

  @IsNotEmpty()
  @IsString()
  public description: string;

  @IsOptional()
  @IsNumber()
  public discountPercentage: number;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  public images: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  public price: number;

  @IsNotEmpty()
  @IsNumber()
  public stock: number;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  public thumbnail: string;

  @IsNotEmpty()
  @IsString()
  public title: string;

  @IsNotEmpty()
  @IsString()
  public alt: string;

  @IsNotEmpty()
  @IsString()
  public slug: string;
}
