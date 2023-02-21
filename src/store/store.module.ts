import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { StoreController } from './controller/store.controller';
import { BooksSchema } from './schema/books.schema';
import { StoreService } from './service/store.service';

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: 'books',
        schema: BooksSchema,
      },
    ]),
  ],
  providers: [StoreService],
  controllers: [StoreController],
})
export class StoreModule {}
