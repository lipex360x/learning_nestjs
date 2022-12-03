import {
  IPipelineHandler,
  IPipelineInputBuilder,
  IPipelineStepBuilder,
} from './interfaces';

export abstract class AbstractPipelineBuilder
  implements IPipelineInputBuilder, IPipelineStepBuilder
{
  protected steps = [];
  protected data: unknown;

  public input(data: unknown): IPipelineStepBuilder {
    this.data = data;
    return this;
  }

  public step<T extends IPipelineHandler>(handler: T): IPipelineStepBuilder {
    this.steps.push(handler);
    return this;
  }

  public async run<T>(): Promise<T> {
    let response = undefined;
    const input = this.data;

    for (const step of this.steps) {
      response = await step.handle(input);
      Object.assign(input as object, response);
    }

    return response as T;
  }
}
