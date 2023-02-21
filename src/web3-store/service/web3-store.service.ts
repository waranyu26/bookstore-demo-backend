import { Injectable } from '@nestjs/common';
import {
  EthersContract,
  EthersSigner,
  InjectContractProvider,
  InjectSignerProvider,
} from 'nestjs-ethers';
import { UserTokenBalanceDto } from '../model/user-book.dto';
import * as BOOKSTORE_ABI from '../abi/bookstore-abi.json';

@Injectable()
export class Web3StoreService {
  constructor(
    @InjectContractProvider()
    private readonly ethersContract: EthersContract,
    @InjectSignerProvider()
    private readonly ethersSigner: EthersSigner,
  ) {}

  // This is a mock number of BookStore (BST) totalSupply
  totalSupply = 2;

  getContract() {
    const wallet = this.ethersSigner.createVoidSigner(
      '0x012363d61bdc53d0290a0f25e9c89f8257550fb8',
    );
    const contract = this.ethersContract.create(
      '0x7C38486638173E8fa03e7A73B614f608d2aE170D',
      BOOKSTORE_ABI,
      wallet,
    );
    return contract;
  }

  // view purchased books balance
  async getUserTokenBalance(input: UserTokenBalanceDto): Promise<any> {
    console.log(input);
    const { walletAddress } = input;
    const contract = this.getContract();

    return contract.balanceOf(walletAddress);
  }

  // view the list of user's purchased books
  async getUserTokenList(input: UserTokenBalanceDto): Promise<any> {
    console.log(input);
    const { walletAddress } = input;
    const contract = this.getContract();

    const userTokens = [];
    // TODO: Improve query performance later
    for (let i = 1; i < this.totalSupply + 1; i++) {
      const owner = await contract.ownerOf(i);
      if (owner === walletAddress) {
        const tokenURI = await contract.tokenURI(i);
        userTokens.push({ tokenId: i, tokenURI });
      }
    }

    return userTokens;
  }
}
