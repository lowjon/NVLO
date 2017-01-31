const app = require('./server.js');
const db = app.get('db')


const productsCtrl = {
  Create: (req, res) => {

  },
  Read: (req, res) => {
    // this is broken, need to get the location query from the url
    console.log('here', req.params);
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
    db.new_product([prod.name, prod.location, prod.quant, prod.supplier], (err, productList) => {
      if (err){
        console.error(err)
      } else {
        console.log(productList);
        res.send(productList)
      }
    })
    //
  },
  UpdateQuantity: (req, res) => {
    //update the quantity and the date for an inventory item
    console.log('updating quantity to: ', req.body.quantity);
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
