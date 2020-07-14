


export default class House {
  constructor(data) {
    this.id = data._id || data.id
    this.price = data.price
    this.bedrooms = data.bedrooms
    this.year = data.year
    this.imgUrl = data.imgUrl || "//placehold.it/200x200"
    this.description = data.description
    this.bathrooms = data.bathrooms
    this.levels = data.levels

  }
  get Template() {
    return `
    <div class="col-3 border rounded shadow">
        <h3>Price: ${this.price}</h3>
        <h5> Bed: ${this.bedrooms}</h5>
        <h5> Bath: ${this.bathrooms}</h5>
        <h5>year built ${this.year}</h5>
        <img class="img-fluid" src=${this.imgUrl} alt="">
          <p> ${this.levels} stories <br> ${this.description}</p>
          <button class="btn btn-danger" onclick="app.houseController.deleteHouse('${this.id}')">Delete</button>
          <button data-toggle="modal" data-target="#exampleModalCenter2" class="btn btn-success float-right" onclick="app.houseController.editForm('${this.id}')">Edit</button>
</div>
      `
  }
}

