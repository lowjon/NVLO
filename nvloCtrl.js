const app = require('./server.js');
const db = app.get('db')


const productsCtrl = {
  Create: (req, res) => {

  },
  Read: (req, res) => {
    db.get_products([req.params.location], (err, products) => {
      if (err){
        console.error(err)
      } else {
        res.send(products)
      }
    })
  },
  NewProduct: (req, res) => {
    let prod = req.body
    db.new_product([prod.name, prod.location, prod.supplier], (err, productList) => {
      if (err){
        console.error(err)
      } else {
        res.send(productList)
      }
    })
  },
  UpdateQuantity: (req, res) => {
    //update the quantity and the date for an inventory item
    db.update_quantity([req.body.quantity, req.params.product_id], (err, response) => {
      if(err) {
        console.error(err);
      } else {
        res.send(response)
      }
    })
  },
  Destroy: (req, res) => {
    db.delete_product([req.body.name], (err, response) => {
      if (err) {
        console.error(err);
      } else {
        res.send(response)
      }
    })
  }

}


module.exports = productsCtrl
