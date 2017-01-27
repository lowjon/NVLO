const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(express.static('src'))
app.use(bodyParser.json())

app.get('/api/inventory/:location', (req, res, next) => {
  db.getInventory([req.params.location], ()=>{})
})
app.listen(8080, function () {
  console.log('listening at port 8080');
})
