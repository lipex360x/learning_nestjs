import { BadRequestException, Injectable } from '@nestjs/common';
import { IPipelineHandler } from 'src/shared/pipeline/interfaces';
import { CreateUserDto } from '../dtos';

@Injectable()
export class CheckIfUserExistsHandle implements IPipelineHandler {
  async handle(request: CreateUserDto): Promise<CreateUserDto> {
    if (!request.email) throw new BadRequestException('email is required');

    console.log('handle 1: check if user exists', request.email);

    return request;
  }
}
