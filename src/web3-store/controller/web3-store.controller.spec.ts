import { Test, TestingModule } from '@nestjs/testing';
import { Web3StoreService } from '../service/web3-store.service';
import { Web3StoreController } from './web3-store.controller';

describe('Web3StoreController', () => {
  let controller: Web3StoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: Web3StoreService,
          useValue: {},
        },
      ],
      controllers: [Web3StoreController],
    }).compile();

    controller = module.get<Web3StoreController>(Web3StoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
