import { Module } from '@nestjs/common';
import { EthersModule } from 'nestjs-ethers';
import { Web3StoreController } from './controller/web3-store.controller';
import { Web3StoreService } from './service/web3-store.service';

@Module({
  imports: [EthersModule],
  providers: [Web3StoreService],
  controllers: [Web3StoreController],
})
export class Web3StoreModule {}
