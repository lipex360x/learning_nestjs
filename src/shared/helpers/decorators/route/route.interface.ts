import { HttpStatus, RequestMethod } from '@nestjs/common';
import {
  ApiBodyOptions,
  ApiHeaderOptions,
  ApiParamOptions,
  ApiResponseOptions,
} from '@nestjs/swagger';

export interface IRoute {
  method: RequestMethod;
  path?: string | string[];
}

export interface IConfig {
  apiHeaders?: ApiHeaderOptions[];
  auth?: boolean;
  defaultStatus?: HttpStatus;
  description: string;
  hasValidation?: boolean;
  requestBody?: ApiBodyOptions;
  requestParams?: ApiParamOptions[];
  response?: ApiResponseOptions;
  responses?: ApiResponseOptions[];
  route: IRoute;
}
