import { ApiProperty } from '@nestjs/swagger';

export class BadRequestError {
  @ApiProperty({ example: 'Bad Request' })
  error: string;

  @ApiProperty()
  message: string[];

  @ApiProperty({ example: 400 })
  statusCode: number;
}
