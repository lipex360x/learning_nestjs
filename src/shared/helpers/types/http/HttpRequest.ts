/* eslint-disable @typescript-eslint/ban-types */
import { Request } from 'express';

export type HttpRequest<Body = {}, Params = {}, Headers = {}> = {
  body: Body;
  params: Params;
  headers: Headers;
} & Request;
