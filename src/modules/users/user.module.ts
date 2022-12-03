import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './application/controllers/users.controller';
import { CreateUserUseCase } from './application/useCases/create-user.usecase';
import { User } from './infra/database/typeorm/entities';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [CreateUserUseCase],
})
export class UserModule {}
