import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LogUserDTO {
  @IsNotEmpty()
  @IsEmail()
  userEmail: string;

  @IsNotEmpty()
  @MinLength(6)
  userPassword: string;
}
