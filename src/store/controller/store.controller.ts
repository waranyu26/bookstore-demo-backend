import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateBookDto } from '../model/create-book.dto';
import { UpdateBookDto } from '../model/update-book.dto';
import { StoreService } from '../service/store.service';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  async create(@Body() body: CreateBookDto) {
    try {
      return await this.storeService.create(body);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateBookDto) {
    try {
      return await this.storeService.update({ id }, body);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.storeService.findOne({ id });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get()
  async find(@Query() { bookId, isbn }: { bookId?: string; isbn?: string }) {
    try {
      if (bookId && !isbn) {
        return await this.storeService.findByBookId(bookId);
      } else if (isbn && !bookId) {
        return await this.storeService.findByBookISBN(isbn);
      } else {
        return await this.storeService.findAll();
      }
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
