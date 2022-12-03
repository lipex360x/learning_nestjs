import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

import { TypeOrmConfigService } from './typeorm.config.service';

type DatabaseConnections = {
  connections?: TypeOrmModuleAsyncOptions[];
};

@Module({})
export class DatabaseModule {
  static register({ connections = [] }: DatabaseConnections = {}) {
    const typeOrmConArray: DynamicModule[] = [];

    typeOrmConArray.push(
      TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    );

    for (const conn of connections) {
      typeOrmConArray.push(TypeOrmModule.forRootAsync(conn));
    }

    return {
      module: DatabaseModule,
      imports: typeOrmConArray,
    } as DynamicModule;
  }
}
