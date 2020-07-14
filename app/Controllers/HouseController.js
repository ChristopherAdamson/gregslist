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
      bedrooms: formData.bedrooms.value,
      year: formData.year.value,
      description: formData.description.value,
      bathrooms: formData.bathrooms.value,
      levels: formData.levels.value,
    }
    _HouseService.addHouse(rawHouseData)
    formData.reset()

  }
  deleteHouse(houseId) {
    let validator = window.confirm("Are you sure you want to delete this?")
    if (validator) {
      _HouseService.deleteHouse(houseId)
    }
  }

  editHouse(event, houseId) {
    event.preventDefault()
    let formData = event.target
    let editHouseData = {
      price: formData.price.value,
      bedrooms: formData.bedrooms.value,
      year: formData.year.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value,
      bathrooms: formData.bathrooms.value,
      levels: formData.levels.value,
    }
    _HouseService.editHouse(editHouseData, houseId)
    formData.reset
  }

  editForm(houseId) {
    let foundHouse = _store.State.houses.find(house => house.id = houseId)
    console.log(foundHouse);

    let template = `
    <form onsubmit="app.houseController.editHouse(event, '${houseId}')" class="col-6">
    <div class="form-group">
      <label for="price">Price</label>
      <input type="number" name="price" class="form-control" value="${foundHouse.price}">
</div>
      <div class="form-group">
        <label for="bedrooms">Bedrooms</label>
        <input type="number" name="bedrooms" class="form-control" value="${foundHouse.bedrooms}">
</div>
</div>
<div class="form-group">
  <label for="bathrooms">Bathrooms</label>
  <input type="number" name="bathrooms" class="form-control" value="${foundHouse.bathrooms}">
</div>
</div>
<div class="form-group">
<label for="levels">Floors?</label>
<input type="number" name="levels" class="form-control" value="${foundHouse.levels}">
</div>
        <div class="form-group">
          <label for="year">Year</label>
          <input type="number" name="year" class="form-control" value="${foundHouse.year}">
</div>
          <div class="form-group">
            <label for="imgUrl">Image Url</label>
            <input type="text" name="imgUrl" class="form-control" value="${foundHouse.imgUrl}">
</div>
            <div class="form-group">
              <label for="description">Description</label>
              <input type="text" name="description" class="form-control" value="${foundHouse.description}">
</div>
              <button type="submit">Submit</button>

</form>
  
  </form>
`
    document.getElementById("edit").innerHTML = template
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
          <label for="bedrooms">Bedrooms</label>
          <input type="number" name="bedrooms" class="form-control" placeholder="How many Bedrooms..?">
  </div>
  </div>
  <div class="form-group">
    <label for="bathrooms">Bathrooms</label>
    <input type="number" name="bathrooms" class="form-control" placeholder="How many Bathrooms..?">
</div>
</div>
<div class="form-group">
  <label for="levels">Floors?</label>
  <input type="number" name="levels" class="form-control" placeholder="How many Floors?..?">
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

