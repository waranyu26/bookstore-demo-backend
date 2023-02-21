import { CreateBookDto } from './create-book.dto';

export type BookKey = {
  id: string;
};

export class BookDto extends CreateBookDto {
  id: string;
  createAt: string;
}
