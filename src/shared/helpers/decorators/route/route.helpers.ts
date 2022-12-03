import {
  All,
  Delete,
  Get,
  Head,
  Options,
  Patch,
  Post,
  Put,
  RequestMethod,
} from '@nestjs/common';

import { IRoute } from './route.interface';

export function resolveRoute({ method, path }: IRoute) {
  switch (method) {
    case RequestMethod.ALL: {
      return All(path);
    }
    case RequestMethod.DELETE: {
      return Delete(path);
    }
    case RequestMethod.HEAD: {
      return Head(path);
    }
    case RequestMethod.OPTIONS: {
      return Options(path);
    }
    case RequestMethod.PATCH: {
      return Patch(path);
    }
    case RequestMethod.POST: {
      return Post(path);
    }
    case RequestMethod.PUT: {
      return Put(path);
    }

    case RequestMethod.GET:
    default: {
      return Get(path);
    }
  }
}
