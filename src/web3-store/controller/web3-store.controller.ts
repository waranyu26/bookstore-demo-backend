import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { UserTokenBalanceDto } from '../model/user-book.dto';
import { Web3StoreService } from '../service/web3-store.service';

@Controller('web3-store')
export class Web3StoreController {
  constructor(private readonly web3storeService: Web3StoreService) {}

  @Get('/balance')
  async getUserTokenBalance(@Query() { walletAddress }: UserTokenBalanceDto) {
    try {
      if (walletAddress)
        return await this.web3storeService.getUserTokenBalance({
          walletAddress,
        });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get('/list')
  async getUserTokenList(@Query() { walletAddress }: UserTokenBalanceDto) {
    try {
      if (walletAddress)
        return await this.web3storeService.getUserTokenList({
          walletAddress,
        });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
