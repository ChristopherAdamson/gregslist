
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
        <h1>make ${this.make}</h1>
        <h1>model ${this.model}</h1>
        <h1>year ${this.year}</h1>
        <h1>price ${this.price}</h1>
        <img class="img-fluid" src=${this.imgUrl} alt="">
          <h1>${this.description}</h1>
          <button class="btn btn-danger" onclick="app.carController.deleteCar('${this.id}')">Delete</button>
</div>
      `
  }

}