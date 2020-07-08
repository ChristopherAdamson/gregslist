import ValuesController from "./Controllers/ValuesController.js";
import CarController from "./Controllers/CarController.js"

class App {
  valuesController = new ValuesController();
  carController = new CarController();
}

window["app"] = new App();
