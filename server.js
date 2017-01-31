//dependencies first

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const massive = require('massive')
const db = massive.connectSync({
  connectionString: 'postgres://postgres:postgres@localhost/NVLO'
})

// then set up the app
const app = module.exports = express()

app.set('db', db)


const port = 3000

//middlewares

app.use(express.static(__dirname + '/build'))
app.use(bodyParser.json())

//controllers
const productsCtrl =  require('./nvloCtrl.js')

//endpoints
app.get('/api/getInventory/:location', productsCtrl.Read)

app.post('/api/inventory:location/new_item', productsCtrl.NewProduct)
app.post('/api/inventory/:product', productsCtrl.Create)

app.update('/api/inventory/:product_id', productsCtrl.UpdateQuantity)

app.delete('/api/inventory/product', productsCtrl.Destroy)


app.listen(port, function () {
  console.log('listening at port ' + port);
})
