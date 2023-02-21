import { Schema } from 'dynamoose';

export const BooksSchema = new Schema({
  // the ID of the book.
  book_id: {
    type: String,
    hashKey: true,
  },
  // the ID of the author.
  author_id: {
    type: String,
    rangeKey: true,
  },
});
