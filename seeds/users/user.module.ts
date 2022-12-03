import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/users/infra/database/typeorm/entities';
import { UserSeedProvider } from './provider';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserSeedProvider],
})
export class UserSeedModule {}
