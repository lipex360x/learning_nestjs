export interface IPipelineHandler {
  handle(request: unknown): Promise<unknown>;
}
