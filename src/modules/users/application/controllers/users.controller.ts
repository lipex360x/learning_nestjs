import { Body, Controller, HttpStatus, RequestMethod } from '@nestjs/common';
import { RouteDecorator } from 'src/shared/helpers/decorators/route';
import { GetUser } from 'src/shared/helpers/decorators';
import { JwtUser } from 'src/shared/helpers/types';
import { CreateUserDto } from '../dtos';
import { CreateUserUseCase } from '../useCases/create-user.usecase';

@Controller('users')
export class UsersController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @RouteDecorator({
    description: 'Users',
    response: { status: HttpStatus.OK },
    route: {
      path: '/',
      method: RequestMethod.POST,
    },
  })
  async post(@GetUser() user: JwtUser, @Body() data: CreateUserDto) {
    const response = await this.createUserUseCase.execute(user, data);

    return response;
  }
}
