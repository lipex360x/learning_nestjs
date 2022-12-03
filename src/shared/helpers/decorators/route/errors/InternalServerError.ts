import { ApiProperty } from '@nestjs/swagger';

export class InternalServerError {
  @ApiProperty({ example: 'Internal server error' })
  error: string;

  @ApiProperty({ example: 500 })
  statusCode: number;
}
