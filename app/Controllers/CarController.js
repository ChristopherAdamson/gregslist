import _carsService from "../Services/CarService.js"
import _store from "../store.js"
import Car from "../Models/cars.js"

function _drawCars() {
  let template = ""
  let cars = _store.State.cars
  cars.forEach(car => template += car.Template)
  document.getElementById("items").innerHTML = template
}


export default class CarController {
  constructor() {
    _store.subscribe("cars", _drawCars)
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

  carForm() {
    _carsService.getCars()

    let template = `
        <form onsubmit="app.carController.addCar(event)" class="col-8">
        <div class="form-group">
            <label for="make">Make</label>
            <input type="text" name="make" class="form-control" placeholder="Enter Make...">
        </div>
        <div class="form-group">
            <label for="model">Model</label>
            <input type="text" name="model" class="form-control" placeholder="Enter Model...">
        </div>
        <div class="form-group">
            <label for="year">Year</label>
            <input type="text" name="year" class="form-control" placeholder="Enter Year...">
        </div>
        <div class="form-group">
            <label for="price">price</label>
            <input type="number" name="price" class="form-control" placeholder="Enter Price...">
        </div>
        <div class="form-group">
            <label for="imgUrl">Image Url</label>
            <input type="text" name="imgUrl" class="form-control" placeholder="Enter Image Url...">
        </div>
    
        <div class="form-group">
            <label for="description">Description</label>
            <input type="text" name="description" class="form-control" placeholder="Enter Description...">
        </div>
        <button type="submit">Submit</button>
    
    </form>
        `
    document.getElementById("forms").innerHTML = template
  }
}



