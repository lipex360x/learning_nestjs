import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './typeorm.config.service';

@Module({})
export class DatabaseModule {
  static register() {
    const connection = TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    });

    return {
      module: DatabaseModule,
      imports: [connection],
    } as DynamicModule;
  }
}
