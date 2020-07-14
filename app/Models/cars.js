
export default class Car {
  constructor(data) {
    this.id = data._id || data.id
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.imgUrl = data.imgUrl || "//placehold.it/200x200"
    this.description = data.description || "No description provided."

  }
  get Template() {
    return `
    <div class="col-3 border rounded shadow">
        <h3>make: ${this.make}</h3>
        <h5>model: ${this.model}</h5>
        <h5>year: ${this.year}</h5>
        <h5>price: ${this.price}</h5>
        <img class="img-fluid" src=${this.imgUrl} alt="">
          <p>${this.description}</p>
          <button class="btn btn-danger float-left" onclick="app.carController.deleteCar('${this.id}')">Delete</button>
          <button data-toggle="modal" data-target="#exampleModalCenter2" class="btn btn-danger float-right" onclick="app.carController.editForm('${this.id}')">Edit</button>
</div>
      `
  }

}