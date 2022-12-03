import { Controller, Get, ServiceUnavailableException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@Controller('healthcheck')
@ApiTags('HealthCheck')
export class HealthController {
  constructor(
    private healthCheck: HealthCheckService,
    private db: TypeOrmHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  async check() {
    const checks = await this.healthCheck.check([
      () =>
        this.db.pingCheck('database', {
          timeout: Number(process.env.HEALTHCHECK_DB_TIMEOUT) || 1000,
        }),
    ]);

    if (checks.status !== 'ok') {
      throw new ServiceUnavailableException({
        version: process.env.npm_package_version || '',
        ...checks,
      });
    }

    return { version: process.env.npm_package_version || '', ...checks };
  }
}
