import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/shared/infra/database';
import { UserSeedModule } from './users/user.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule.register(), UserSeedModule],
  providers: [Logger],
})
export class SeedsModule {}
