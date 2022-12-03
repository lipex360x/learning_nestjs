import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

import { JwtUser } from '../types';

export const GetUser = createParamDecorator(
  (_data, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest<Request>();

    return parseUserHeaders(request);
  },
);

export function parseUserHeaders(request: Request) {
  // if (!request.headers.user_email) {
  //   throw new BadRequestException('undefined header user_email');
  // }

  return {
    id: request.headers.user_id,
    email: request.headers.user_email,
    ip: request.headers['x-forwarded-for'] || request.socket.remoteAddress,
  } as JwtUser;
}
