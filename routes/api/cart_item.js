var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let cart_item = await req.db.any(`
        SELECT
            cart_item.item_id AS id,
            cart.cart_id,
            product.name AS product,
            cart_item.quantity,
            cart_item.created_at
        FROM
            cart_item
        INNER JOIN cart ON cart.cart_id = cart_item.cart_id
        INNER JOIN product ON product.product_id = cart_item.product_id
    `)
    console.log(cart_item)
    res.json({cart_item: cart_item })

});

module.exports = router;