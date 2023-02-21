import { Test, TestingModule } from '@nestjs/testing';
import { Web3StoreController } from './web3-store.controller';

describe('Web3StoreController', () => {
  let controller: Web3StoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Web3StoreController],
    }).compile();

    controller = module.get<Web3StoreController>(Web3StoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
