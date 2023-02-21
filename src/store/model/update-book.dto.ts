import { IsString, IsNumber } from 'class-validator';

export class UpdateBookDto {
  @IsString()
  title: string;

  @IsString()
  isbn: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  publishedDate: string;

  @IsString()
  publisher: string;

  @IsString()
  image: string;
}
