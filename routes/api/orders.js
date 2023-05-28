var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let orders = await req.db.any(`
        SELECT
            orders.orders_id AS id,
            users.username AS name,
            orders.total_amount AS amount,
            orders.created_at
        FROM
            orders
        INNER JOIN users ON users.user_id = orders.user_id
    `)
    console.log(orders)
    res.json({orders: orders })

});

module.exports = router;