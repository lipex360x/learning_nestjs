import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'name is reequired' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'email is reequired' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'password is reequired' })
  password: string;
}
