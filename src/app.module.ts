import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './shared/configs/database/database.module';
import { HealthModule } from './shared/helpers/healthcheck/healthcheck.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule.register(), HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
