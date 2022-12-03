import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPipelineHandler } from 'src/shared/pipeline/interfaces';
import { Repository } from 'typeorm';
import { User } from '../../infra/database/typeorm/entities';
import { CreateUserDto } from '../dtos';

@Injectable()
export class CheckIfUserExistsHandle implements IPipelineHandler {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}
  async handle(request: CreateUserDto): Promise<CreateUserDto> {
    if (!request.email) throw new BadRequestException('email is required');

    const findUser = await this.repository.findOne({
      where: { email: request.email },
    });

    if (findUser) throw new BadRequestException('email is already exists');

    return request;
  }
}
