var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('orders_item/list', { title: 'Предметы в заказе' })

});

router.post('/create', async function(req, res, next) {

    let orders = req.body

    await req.db.none('INSERT INTO orders_item(orders_id, product_id, quantity) VALUES(${orders_id}, ${product_id}, ${quantity})', orders);

    res.send({msg: ''})

});

router.post('/delete', async function(req, res, next) {

    let orders = req.body

    await req.db.none("DO $do$ BEGIN IF (${id}<>'') THEN DELETE FROM orders_item WHERE item_id = ${id}; END IF; END $do$",orders);
    res.send({msg: ''})

});
module.exports = router;