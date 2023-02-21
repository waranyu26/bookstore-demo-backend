import { Schema } from 'dynamoose';

export const AuthorsSchema = new Schema({
  // the unique identifier for an author.
  id: {
    type: String,
    hashKey: true,
  },
  // the first name of the author.
  firstname: {
    type: String,
  },
  // the last name of the author.
  lastName: {
    type: String,
  },
  // the email address of the author.
  email: {
    type: Number,
  },
  // the date of birth of the author.
  birthdate: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});
