import { Schema } from 'dynamoose';

export const BooksSchema = new Schema({
  // the unique identifier for a book.
  id: {
    type: String,
    hashKey: true,
  },
  // the title of the book.
  title: {
    type: String,
    rangeKey: true,
  },
  // the International Standard Book Number (ISBN) of the book.
  isbn: {
    type: String,
    index: {
      type: 'global',
      rangeKey: 'id',
    },
  },
  // a brief description of the book.
  description: {
    type: String,
  },
  // the price of the book.
  price: {
    type: Number,
  },
  // the date when the book was published.
  publishedDate: {
    type: String,
  },
  // the name of the publisher.
  publisher: {
    type: String,
  },
  // the URL of the book cover image.
  image: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});
