const massive = require('massive')

const db = massive.connectSync({
  connectionString: 'postgres://postgres:postgres@localhost/NVLO'
})

const crud = {
  Create: (req, res) => {

  },
  Read: (req, res) => {
    let data = req.body
    db.get_products((err, products) => {
      if (err){
        consloe.error(err)
      } else {
        res.send(products)
      }
    })
  },
  Update: (req, res) => {
  },
  UpdateQuantity: (req, res) => {

  },
  Delete: (req, res) => {
  }

}


module.exports = crud
