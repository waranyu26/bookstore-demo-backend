import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

export class VerifyRequestDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @Matches(/[0-9]/)
  code: string;
}
