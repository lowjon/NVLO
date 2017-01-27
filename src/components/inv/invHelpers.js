import axios from 'axios'

const getProductInfo = (location) => {
  return axios.get('db url' + location)
}

const helpers = {
  getProducts: (location) => {
    // fetch product (by location) data from DB
    getProductInfo()
      .then()
      .catch((err) => {
        console.log(err);
      })

  }
}

export default helpers
