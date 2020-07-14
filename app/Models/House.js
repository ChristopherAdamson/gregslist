


export default class House {
  constructor(data) {
    this.id = data._id || data.id
    this.price = data.price
    this.sqFt = data.sqFt
    this.year = data.year
    this.imgUrl = data.imgUrl || "//placehold.it/200x200"
    this.description = data.description

  }
  get Template() {
    return `
    <div class="col-3 border rounded shadow">
        <h1>Price ${this.price}</h1>
        <h1>Square footage ${this.sqFt}</h1>
        <h1>year built ${this.year}</h1>
        <img class="img-fluid" src=${this.imgUrl} alt="">
          <h1>${this.description}</h1>
          <button class="btn btn-danger" onclick="app.houseController.deleteHouse('${this.id}')">Delete</button>
</div>
      `
  }
}

