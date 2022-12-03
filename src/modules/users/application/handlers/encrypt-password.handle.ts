import { hash } from 'bcryptjs';
import { IPipelineHandler } from 'src/shared/pipeline/interfaces';
import { CreateUserDto } from '../dtos';

export class EncrpytPasswordHandle implements IPipelineHandler {
  async handle(request: CreateUserDto): Promise<CreateUserDto> {
    const encryptPass = await hash(request.password, 10);

    Object.assign(request, {
      ...request,
      password: encryptPass,
    });

    console.log('handle 2: encrypt pass', request);

    return request;
  }
}
