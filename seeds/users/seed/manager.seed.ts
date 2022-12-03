import { Repository } from 'typeorm';

import { User } from 'src/modules/users/infra/database/typeorm/entities';

export async function managerSeed(repository: Repository<User>): Promise<void> {
  await repository
    .create({
      name: 'test',
      email: 'test@test.com',
      password: 'abc123',
    })
    .save();
}
