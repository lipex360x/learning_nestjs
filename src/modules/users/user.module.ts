import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './application/controllers/users.controller';
import { CheckIfUserExistsHandle } from './application/handlers/check-if-user-exists.handle';
import { EncrpytPasswordHandle } from './application/handlers/encrypt-password.handle';
import { CreateUserPipelineBuilder } from './application/handlers/pipeline.builder';
import { CreateUserUseCase } from './application/useCases/create.usecase';
import { User } from './infra/database/typeorm/entities';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    CreateUserUseCase,
    CreateUserPipelineBuilder,
    CheckIfUserExistsHandle,
    EncrpytPasswordHandle,
  ],
})
export class UserModule {}
