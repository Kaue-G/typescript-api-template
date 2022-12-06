//imlementation repository

import { IExampleRepository } from "../IExample";
import Example from "../../entities/dataBaseExample.json"
import { IExampleDTO } from "../../dtos/exampleDto";

class ExampleRepository implements IExampleRepository {
  listExample(): IExampleDTO[] {
    return Example.locadora.filmes;
  }
}

export { ExampleRepository };
