import { Test, TestingModule } from '@nestjs/testing';
import { Web3StoreService } from './web3-store.service';

describe('Web3StoreService', () => {
  let service: Web3StoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: Web3StoreService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<Web3StoreService>(Web3StoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
