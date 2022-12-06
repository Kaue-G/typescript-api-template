// example controller

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListExampleUseCase } from './exampleUseCase'

class ExampleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listExampleUseCase = container.resolve(ListExampleUseCase);

    const listExample = await listExampleUseCase.execute();

    return response.json(listExample);
  }
};

export { ExampleController };