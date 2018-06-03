var express = require('express')
var router = express.Router()
var exampleOrders = require('./example-orders')

router.get('/', function (req, res) {
    res.json(exampleOrders)
})

router.get('/:orderId', function (req, res) {
    order = exampleOrders.find(item => {
        return item.id == req.params['orderId']
     })
     if (order) { res.json(order) } 
     else       { res.sendStatus(404) }
})
  
module.exports = router