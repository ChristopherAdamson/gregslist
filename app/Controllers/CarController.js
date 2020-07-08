import _carsService from "../Services/CarService.js"
import _store from "../store.js"

function _drawCars() {
  let template = ""
  let cars = _store.State.cars
  cars.forEach(car => template += car.Template)
  document.getElementById("cars").innerHTML = template
}

export default class CarController {
  constructor() {
    _drawCars()

  }
  addCar(event) {
    event.preventDefault();
    let formData = event.target
    let rawCarData = {
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value,
    }
    _carsService.addCar(rawCarData)
    formData.reset()
    _drawCars()
  }

  deleteCar(carId) {
    _carsService.deleteCar(carId)
    _drawCars()
  }
}