import { IPipelineStepBuilder } from './pipeline-step.interface';

export interface IPipelineInputBuilder {
  input(data: unknown): IPipelineStepBuilder;
}
