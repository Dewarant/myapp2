var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('cart/list', { title: 'Корзина' })

});


router.post('/create', async function(req, res, next) {

    let cart = req.body

    await req.db.none('INSERT INTO cart(user_id) VALUES(${uid})', cart);

    res.send({msg: ''})

});


router.post('/update', async function(req, res, next) {

    let cart = req.body

    await req.db.none("DO $do$ BEGIN IF (${uid}<>'') THEN UPDATE cart SET user_id = ${uid} WHERE cart_id = ${id}; END IF; END $do$",cart);
    res.send({msg: ''})

});


router.post('/delete', async function(req, res, next) {

    let cart = req.body

    await req.db.none("DO $do$ BEGIN IF (${id}<>'') THEN DELETE FROM cart WHERE cart_id = ${id}; END IF; END $do$",cart);
    res.send({msg: ''})

});
module.exports = router;
