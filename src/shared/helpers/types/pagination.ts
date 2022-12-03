import { FindOptionsWhere } from 'typeorm';

import { AnyObject } from './common';

export type SortOrder = 'ASC' | 'DESC';

export type ListParameters<T = AnyObject> = FindOptionsWhere<T> & {
  page?: number;
  perPage?: number;
  sort?: string[];
};

export type PaginationResult<Entity extends AnyObject> = {
  data: Entity[];
  lastPage?: number;
  page?: number;
  perPage?: number;
  total?: number;
};
