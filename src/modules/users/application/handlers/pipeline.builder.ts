import { Injectable } from '@nestjs/common';
import { AbstractPipelineBuilder } from 'src/shared/pipeline';
import {
  IPipelineHandler,
  IPipelineStepBuilder,
} from 'src/shared/pipeline/interfaces';
import { CreateUserDto } from '../dtos';

@Injectable()
export class CreateUserPipelineBuilder extends AbstractPipelineBuilder {
  public step<T extends IPipelineHandler>(handler: T): IPipelineStepBuilder {
    this.steps.push(handler);

    return this;
  }

  public input(data: CreateUserDto): IPipelineStepBuilder {
    this.data = data;

    return this;
  }
}
