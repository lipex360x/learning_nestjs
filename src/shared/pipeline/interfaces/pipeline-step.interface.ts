import { IPipelineHandler } from './pipeline-handler.interface';

export interface IPipelineStepBuilder {
  step<T extends IPipelineHandler>(handler: T): IPipelineStepBuilder;
  run<T>(): Promise<T>;
}
