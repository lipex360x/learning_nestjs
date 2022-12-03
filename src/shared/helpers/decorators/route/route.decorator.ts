import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiHeaders,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import {
  BadRequestError,
  InternalServerError,
  UnauthorizedError,
} from './errors';
import { resolveRoute } from './route.helpers';
import { IConfig } from './route.interface';

export function RouteDecorator({
  auth = false,
  defaultStatus = HttpStatus.OK,
  description,
  hasValidation = false,
  requestBody,
  requestParams = [],
  apiHeaders,
  response,
  responses = [],
  route,
}: IConfig) {
  const options: MethodDecorator[] = [resolveRoute(route)];

  if (auth) {
    options.push(
      ApiBearerAuth('Authorization'),
      ApiUnauthorizedResponse({
        description: 'Unauthorized',
        type: UnauthorizedError,
      }),
    );
  }

  if (requestBody) {
    options.push(ApiBody(requestBody));
  }

  if (apiHeaders) {
    options.push(ApiHeaders(apiHeaders));
  }

  if (response) {
    options.push(ApiResponse(response));
  }

  if (hasValidation) {
    options.push(
      ApiBadRequestResponse({
        description: 'Bad request',
        type: BadRequestError,
      }),
    );
  }

  options.push(
    ...responses.map((config) => ApiResponse(config)),
    ...requestParams.map((config) => ApiParam(config)),
    ApiInternalServerErrorResponse({
      description: 'Internal server error',
      type: InternalServerError,
    }),
    HttpCode((response?.status || defaultStatus) as number),
  );

  return applyDecorators(ApiOperation({ summary: description }), ...options);
}
