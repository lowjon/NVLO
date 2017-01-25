const express = require('express');
const bodyParser = require('body-parser');

const app = express()

// app.use(express.static('assets'))
app.use(bodyParser.json())


app.listen(8080, function () {
  console.log('listening at port 8080');
})
