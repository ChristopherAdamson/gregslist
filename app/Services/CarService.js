import _store from "../store.js"
import Car from "../Models/cars.js"
import store from "../store.js"

// @ts-ignore
let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeOut: 10000
})
class CarsService {
  constructor() {
  }

  getCars() {
    _api.get("cars").then(res => {
      let cars = res.data.data.map(cardata => new Car(cardata))
      store.commit("cars", cars)
    }).catch(err => console.error(err))
  }
  addCar(rawCarData) {

  }


  deleteCar(carId) {

  }

}
const SERVICE = new CarsService()

export default SERVICE


