import path from 'path';

import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions() {
    return {
      type: 'mysql',
      applicationName: `${process.env.npm_package_name}-${process.env.NODE_ENV}`,
      keepConnectionAlive: false,
      host: process.env.DB_HOST || 'localhost',
      port: +(process.env.DB_PORT || 3306),
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: `${process.env.DB_NAME || 'nestdb'}`,
      entities: ['src/*/*.entity.ts'],
      autoLoadEntities: true,
      logging: process.env.TYPEORM_LOGGING === 'true',
      synchronize: process.env.NODE_ENV !== 'production',
      namingStrategy: new SnakeNamingStrategy(),
    } as TypeOrmModuleOptions;
  }
}
