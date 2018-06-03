var express = require('express')
var app = express()
var orders = require('./orders')

app.use('/orders', orders)

app.listen(8006, () => console.log('Order service listening on port 8006!'))