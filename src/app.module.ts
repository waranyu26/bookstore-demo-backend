import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { StoreModule } from './store/store.module';
import { DynamooseModule } from 'nestjs-dynamoose';
import { EthersModule, GOERLI_NETWORK } from 'nestjs-ethers';
import { Web3StoreModule } from './web3-store/web3-store.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DynamooseModule.forRoot({
      local: process.env.IS_DDB_LOCAL === 'true',
      aws: { region: process.env.REGION },
      table: {
        create: process.env.IS_DDB_LOCAL === 'true',
        prefix: `${process.env.SERVICE}-${process.env.STAGE}-`,
        suffix: '-table',
      },
    }),
    EthersModule.forRoot({
      network: GOERLI_NETWORK,
      alchemy: process.env.ALCHEMY_API_KEY,
      etherscan: process.env.ETHERSCAN_API_KEY,
      cloudflare: true,
    }),
    StoreModule,
    Web3StoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
