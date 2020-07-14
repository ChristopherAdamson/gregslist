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
    _api.post("cars", rawCarData).then(res => {
      console.log(res);
      this.getCars()
    }).catch(err => console.error(err))
  }


  deleteCar(carId) {
    _api.delete("cars/" + carId).then(res => {
      this.getCars()
    }).catch(err => console.error(err))
  }
  // make: formData.make.value,
  // model: formData.model.value,
  // year: formData.year.value,
  // price: formData.price.value,
  // imgUrl: formData.imgUrl.value,
  // description: formData.description.value
  editCar(editCarData, carId) {
    let updatedCar = _store.State.cars.find(car => car.id = carId)
    updatedCar.make = editCarData.make
    updatedCar.model = editCarData.model
    updatedCar.year = editCarData.year
    updatedCar.price = editCarData.price
    updatedCar.imgUrl = editCarData.imgUrl
    updatedCar.description = editCarData.description
    _api.put("cars/" + carId, updatedCar).then(res => {
      let cars = _store.State.cars.map(car => {
        if (car.id == carId) {
          return new Car(res.data)
        } else {
          return new Car(car)
        }
      })
      store.commit("cars", cars)
      console.log(res);
    }).catch(err => console.error(err))
  }

}
const SERVICE = new CarsService()

export default SERVICE


