import { IsNotEmpty, IsString } from 'class-validator';

export class UserTokenBalanceDto {
  @IsNotEmpty()
  @IsString()
  walletAddress: string;
}
