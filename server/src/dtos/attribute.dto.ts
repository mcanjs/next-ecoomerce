import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsString, ValidateIf, ArrayNotEmpty } from 'class-validator';

export class CreateAttributeDto {
  @IsNotEmpty()
  @IsString()
  public type: 'radio' | 'checkbox' | 'input' | 'textarea' | 'select';

  @IsNotEmpty()
  @IsString()
  public title: string;

  @ValidateIf(dto => dto.type === 'radio' || dto.type === 'checkbox' || dto.type === 'select')
  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1, {
    each: true,
  })
  public choices: string[];

  @IsNotEmpty()
  @IsBoolean()
  public required: boolean;
}
