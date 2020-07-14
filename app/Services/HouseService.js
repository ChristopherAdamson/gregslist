import _store from "../store.js"
import House from "../Models/House.js"
import store from "../store.js"

// @ts-ignore
const _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 10000
})


class HouseService {
  constructor() {
  }
  getHouses() {
    _api.get("houses").then(res => {
      console.log(res.data)
      let houses = res.data.data.map(housedata => new House(housedata))
      store.commit("houses", houses)
    }).catch(err => console.error(err))
  }



  addHouse(rawHouseData) {

  }

}

const SERVICE = new HouseService
export default SERVICE

