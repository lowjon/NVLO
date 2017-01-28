const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const crud =  require('./nvloCtrl.js')

const app = express()

const port = 3003

app.use(express.static('src'))
app.use(bodyParser.json())

app.get('/api/inventory:location', crud.Read)

app.post('/api/inventory/:product', (req, res, next) => {

})
app.post('/api/inventory/:quantity', crud.UpdateQuantity)




app.listen(port, function () {
  console.log('listening at port ' + port);
})
