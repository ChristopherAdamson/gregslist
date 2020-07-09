import _HouseService from "../Services/HouseService.js"
import _store from "../store.js"
// we need a blank template
// we need the cars
// we need the element to inject into
function _drawHouse() {
  let template = ""
  let houses = _store.State.houses
  houses.forEach(house => template += house.Template)
  document.getElementById("houses").innerHTML = template
}




export default class HouseController {
  constructor() {
    _drawHouse()


  }
  addHouse(event) {
    event.preventDefault();
    let formData = event.target
    let rawHouseData = {
      price: formData.price.value,
      sqFt: formData.sqFt.value,
      year: formData.year.value,
      description: formData.description.value,
    }
    _HouseService.addHouse(rawHouseData)
    formData.reset()
    _drawHouse
  }
}

