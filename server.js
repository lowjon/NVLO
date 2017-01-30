const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const productsCtrl =  require('./nvloCtrl.js')

const app = module.exports = express()

const port = 3003

app.use(express.static('src'))
app.use(bodyParser.json())

app.get('/api/inventory:location', productsCtrl.Read)

app.post('/api/inventory:location/new_item', productsCtrl.NewProduct)
app.post('/api/inventory/:product', productsCtrl.Create)

app.put('/api/inventory/:product_id', productsCtrl.UpdateQuantity)

app.delete('/api/inventory/product', productsCtrl.Destroy)


app.listen(port, function () {
  console.log('listening at port ' + port);
})
