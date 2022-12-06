// example UseCase

import { inject, injectable } from 'tsyringe';
import { IExampleDTO } from '../../dtos/exampleDto';
import { IExampleRepository } from '../../repositores/IExample';

@injectable()
class ListExampleUseCase {
  constructor(
    @inject('ExampleRepository')
    private exampleRepository: IExampleRepository
  ) {}

  async execute (): Promise<IExampleDTO[]> {
    const examples = this.exampleRepository.listExample();

    return examples;
  }
}

export { ListExampleUseCase };
