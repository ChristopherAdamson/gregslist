import _HouseService from "../Services/HouseService.js"
import _store from "../store.js"
// we need a blank template
// we need the cars
// we need the element to inject into
function _drawHouse() {
  let template = ""
  let houses = _store.State.houses
  houses.forEach(house => template += house.Template)
  document.getElementById("items").innerHTML = template
}




export default class HouseController {
  constructor() {
    _store.subscribe("houses", _drawHouse)

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

  houseForm() {
    _HouseService.getHouses()
    let template = `
    <form onsubmit="app.houseController.addHouse(event)" class="col-6">
      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" name="price" class="form-control" placeholder="Enter Price...">
  </div>
        <div class="form-group">
          <label for="sqFt">Square Feet</label>
          <input type="text" name="sqFt" class="form-control" placeholder="Enter Square Feet...">
  </div>
          <div class="form-group">
            <label for="year">Year</label>
            <input type="number" name="year" class="form-control" placeholder="Enter Year...">
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

