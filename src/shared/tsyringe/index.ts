import { container } from 'tsyringe';

import { IExampleRepository } from '../../modules/example/repositores/IExample';
import { ExampleRepository } from '../../modules/example/repositores/implementations/Example';

container.registerSingleton<IExampleRepository>(
  'ExampleRepository',
  ExampleRepository
);