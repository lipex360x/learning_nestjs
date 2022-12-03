import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SeedsModule } from './seeds.module';
import { UserSeedProvider } from './users/provider';

export async function bootstrap(): Promise<void> {
  const appContext = await NestFactory.createApplicationContext(
    SeedsModule,
  ).catch((error) => {
    throw error;
  });

  const logger = appContext.get(Logger);
  const userSeed = appContext.get(UserSeedProvider);

  await userSeed
    .execute()
    .catch((error) => {
      logger.error('seeding failed', error);
      throw error;
    })
    .finally(() => appContext.close());

  logger.debug('seeding complete!');
}

bootstrap();
