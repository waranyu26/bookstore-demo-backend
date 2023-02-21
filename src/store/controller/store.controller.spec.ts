import { Test, TestingModule } from '@nestjs/testing';
import { StoreService } from '../service/store.service';
import { StoreController } from './store.controller';

describe('StoreController', () => {
  let controller: StoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: StoreService,
          useValue: {},
        },
      ],
      controllers: [StoreController],
    }).compile();

    controller = module.get<StoreController>(StoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
