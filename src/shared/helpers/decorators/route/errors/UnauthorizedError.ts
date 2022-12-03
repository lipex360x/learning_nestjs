import { ApiProperty } from '@nestjs/swagger';

export class UnauthorizedError {
  @ApiProperty({ example: 'Unauthorized' })
  error: string;

  @ApiProperty({
    examples: ['Header Authorization not found', 'Malformated JWT'],
  })
  message: string;

  @ApiProperty({ example: 401 })
  statusCode: number;
}
