import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configuration from './configs/configs';
import { RedisModule } from './modules/redis/redis.module';
import {MongooseModule} from "@nestjs/mongoose";
import * as process from "process";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    RedisModule,
    MongooseModule.forRoot(process.env.MONGODB_URI),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
