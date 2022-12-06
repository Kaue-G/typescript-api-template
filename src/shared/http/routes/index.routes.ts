
import { Router } from "express";
import { ExampleController } from "../../../modules/example/useCases/exampleUseCase/exampleController";

const router = Router();

const exampleController = new ExampleController();

router.use('/home', exampleController.handle);

export { router };