var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('product/list', { title: 'Концелярские товары' })

});

router.post('/create', async function(req, res, next) {

    let product = req.body

    await req.db.none('INSERT INTO product(name, provider_id, description, price, stock) VALUES(${name}, ${provider_id}, ${description}, ${price}, ${stock})', product);

    res.send({msg: ''})

});


router.post('/update', async function(req, res, next) {

    let product = req.body

    await req.db.none("DO $do$ BEGIN IF (${name}<>'') THEN UPDATE product SET name=${name} WHERE product_id=${id}; END IF; END $do$",product);
    await req.db.none("DO $do$ BEGIN IF (${provider_id}<>'') THEN UPDATE product SET provider_id=${provider_id} WHERE product_id=${id}; END IF; END $do$",product);
    await req.db.none("DO $do$ BEGIN IF (${description}<>'') THEN UPDATE product SET description=${description} WHERE product_id=${id}; END IF; END $do$",product);
    await req.db.none("DO $do$ BEGIN IF (${price}<>'') THEN UPDATE product SET price=${price} WHERE product_id=${id}; END IF; END $do$",product);
    await req.db.none("DO $do$ BEGIN IF (${stock}<>'') THEN UPDATE product SET stock=${stock} WHERE product_id=${id}; END IF; END $do$",product);
    res.send({msg: ''})

});


router.post('/delete', async function(req, res, next) {

    let product = req.body

    await req.db.none("DO $do$ BEGIN IF (${id}<>'') THEN DELETE FROM product WHERE product_id = ${id}; END IF; END $do$",product);
    res.send({msg: ''})

});

module.exports = router;
