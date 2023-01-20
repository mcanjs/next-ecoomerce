import { IsEmail, IsString } from 'class-validator';

export class LoginAuthDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
