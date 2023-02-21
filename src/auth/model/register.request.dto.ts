import { IsEmail, IsString, Validate } from 'class-validator';
import { IsValidPassword } from './password.decorator';

export class RegisterRequestDto {
  @IsEmail()
  email: string;

  @IsString()
  @Validate(IsValidPassword)
  password: string;
}
