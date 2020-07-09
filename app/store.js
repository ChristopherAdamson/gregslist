import Value from "./Models/Value.js";
import Car from "./Models/cars.js"
import House from "./Models/House.js"

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {Car[]} */
  cars: [],
  /** @type {House[]} */
  houses: []
};

class Store {


  deleteCar(carId) {
    let indexToRemove = _state.cars.findIndex(car => car.id == carId)
    _state.cars.splice(indexToRemove, 1)
  }


  addCar(newCar) {
    _state.cars.push(newCar)
  }

  addHouse(newHouse) {
    _state.houses.push(newHouse)
  }


  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
