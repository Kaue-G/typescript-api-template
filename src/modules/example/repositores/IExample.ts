// interface repository

import { IExampleDTO } from "../dtos/exampleDto";

interface IExampleRepository {
  listExample(): IExampleDTO[];
}

export { IExampleRepository };