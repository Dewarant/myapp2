var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('orders/list', { title: 'Заказы' })

});

router.post('/create', async function(req, res, next) {

    let orders = req.body

    await req.db.none('INSERT INTO orders(user_id, total_amount) VALUES(${user_id}, ${amount})', orders);

    res.send({msg: ''})

});

router.post('/delete', async function(req, res, next) {

    let orders = req.body

    await req.db.none("DO $do$ BEGIN IF (${id}<>'') THEN DELETE FROM orders WHERE orders_id = ${id}; END IF; END $do$",orders);
    res.send({msg: ''})

});

module.exports = router;