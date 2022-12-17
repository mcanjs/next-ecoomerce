import { IsEmail, IsString, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public name: string;

  @IsString()
  public surname: string;

  @IsPhoneNumber('TR')
  public phone: string;

  @IsString()
  public birthDate: string;
}
