import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/modules/users/infra/database/typeorm/entities';
import { Repository } from 'typeorm';
import { managerSeed } from '../seed/manager.seed';

@Injectable()
export class UserSeedProvider {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async execute(): Promise<void> {
    await managerSeed(this.repository);
  }
}
