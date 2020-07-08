import _store from "../store.js"
import Car from "../Models/cars.js"

class CarsService {
  constructor() {
  }


  addCar(rawCarData) {
    let newCar = new Car(rawCarData)
    _store.addCar(newCar)
  }


  deleteCar(carId) {
    _store.deleteCar(carId)
  }

}
const SERVICE = new CarsService()

export default SERVICE


