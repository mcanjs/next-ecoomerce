import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsOptional()
  @IsString()
  @IsUrl()
  public image: string;

  @IsOptional()
  @IsString()
  public alt: string;

  @IsNotEmpty()
  @IsString()
  public slug: string;
}
