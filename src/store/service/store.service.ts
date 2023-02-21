import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import * as uuid from 'uuid';
import { CreateBookDto } from '../model/create-book.dto';
import { BookDto, BookKey } from '../model/book.model';
import { UpdateBookDto } from '../model/update-book.dto';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel('books')
    private readonly model: Model<BookDto, BookKey>,
  ) {}

  create(input: CreateBookDto) {
    return new Promise((resolve, reject) => {
      console.log(input);
      return this.model.create(
        {
          ...input,
          id: uuid.v4(),
          createAt: new Date().toISOString(),
        },
        (err, result) => {
          if (!result) {
            reject(err);
          } else {
            resolve(result);
          }
        },
      );
    });
  }

  update(key: BookKey, input: UpdateBookDto) {
    return new Promise((resolve, reject) => {
      console.log(input);
      return this.model.update(key, input, (err, result) => {
        if (!result) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  findAll() {
    return new Promise((resolve, reject) => {
      return this.model.scan().exec((err, result) => {
        if (!result) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  findOne(key: BookKey) {
    return new Promise((resolve, reject) => {
      return this.model.get(key, (err, result) => {
        if (!result) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  findByBookId(bookId: string) {
    return new Promise((resolve, reject) => {
      return this.model
        .query('bookId')
        .eq(bookId)
        .exec((err, result) => {
          if (!result) {
            reject(err);
          } else {
            resolve(result);
          }
        });
    });
  }

  findByBookISBN(isbn: string) {
    return new Promise((resolve, reject) => {
      return this.model
        .query('isbn')
        .eq(isbn)
        .exec((err, result) => {
          if (!result) {
            reject(err);
          } else {
            resolve(result);
          }
        });
    });
  }
}
