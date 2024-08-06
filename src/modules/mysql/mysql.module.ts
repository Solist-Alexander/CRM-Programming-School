import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MysqlConnectService } from './mysql-connect.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: MysqlConnectService,
    }),
  ],
  controllers: [],
  providers: [],
})
export class PostgresModule {}