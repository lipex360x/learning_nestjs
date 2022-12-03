import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './infra/database/typeorm/entities';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
})
export class UserModule {}
