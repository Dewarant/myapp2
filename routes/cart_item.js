var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('cart_item/list', { title: 'Элементы корзины' })

});

router.post('/create', async function(req, res, next) {

    let cart_item = req.body

    await req.db.none('INSERT INTO cart_item(cart_id, product_id, quantity) VALUES(${cart_id}, ${product_id}, ${quantity})', cart_item);

    res.send({msg: ''})

});

router.post('/delete', async function(req, res, next) {

    let cart_item = req.body

    await req.db.none('DELETE FROM cart_item WHERE item_id = ${id}', cart_item);

    res.send({msg: ''})

});

module.exports = router;
