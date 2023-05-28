var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let cart = await req.db.any(`
        SELECT
            cart.cart_id AS id,
            cart.user_id AS uid,
            cart.created_at
        FROM
            cart
    `)
    console.log(cart)
    res.json({cart: cart })

});

module.exports = router;
