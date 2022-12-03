import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './shared/infra/database';
import { HealthModule } from './shared/helpers/healthcheck';
import { UserModule } from './modules/users';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule.register(),
    HealthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
