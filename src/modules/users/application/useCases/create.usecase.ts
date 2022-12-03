import { Injectable } from '@nestjs/common';
import { JwtUser } from 'src/shared/helpers/types';
import { CreateUserDto } from '../dtos';
import { CheckIfUserExistsHandle } from '../handlers/check-if-user-exists.handle';
import { EncrpytPasswordHandle } from '../handlers/encrypt-password.handle';
import { CreateUserPipelineBuilder } from '../handlers/pipeline.builder';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly pipeline: CreateUserPipelineBuilder,
    private readonly checkIfUserExistsHandle: CheckIfUserExistsHandle,
    private readonly encryptPasswordHandle: EncrpytPasswordHandle,
  ) {}

  async execute(user: JwtUser, data: CreateUserDto) {
    const responseData = this.pipeline
      .input(data)
      .step(this.checkIfUserExistsHandle)
      .step(this.encryptPasswordHandle)
      .run();

    return responseData;
  }
}
