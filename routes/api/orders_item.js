var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let orders_item = await req.db.any(`
        SELECT
            orders_item.item_id AS id,
            orders.orders_id AS orders_id,
            product.name AS product,
            orders_item.quantity
        FROM
            orders_item
        INNER JOIN orders ON orders.orders_id = orders_item.orders_id
        INNER JOIN product ON product.product_id = orders_item.product_id
    `)
    console.log(orders_item)
    res.json({orders_item: orders_item })

});

module.exports = router;