import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtUser } from 'src/shared/helpers/types';
import { Repository } from 'typeorm';
import { User } from '../../infra/database/typeorm/entities';
import { CreateUserDto } from '../dtos';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async execute(user: JwtUser, data: CreateUserDto) {
    console.log(data, user);

    return null;
  }
}
