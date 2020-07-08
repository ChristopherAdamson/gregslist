import SERVICE from "../Services/CarService.js"
import _store from "../store.js"

function _drawCars() {
  let template = ""
  let cars = _store.State.cars
  cars.forEach(car => template += car.Template)
  document.getElementById("cars").innerHTML = template
}

export default class CarController {
  constructor() {
    console.log("hello from car controller");
    _drawCars()

  }
  addCar() {
    event.preventDefault()
    console.log("worked?");

  }
}