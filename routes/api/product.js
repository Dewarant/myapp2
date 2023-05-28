var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let product = await req.db.any(`
        SELECT
            product.product_id AS id,
            product.name,
            provider.addres AS provider,
            product.description,
            product.price,
            product.stock
        FROM
            product
        INNER JOIN provider ON provider.provider_id = product.provider_id
    `)
    console.log(product)
    res.json({product: product })

});

router.get('/search', async function(req, res, next) {
    const { position } = req.query;

    let product = await req.db.any(`
        SELECT
            product.product_id AS id,
            product.name,
            provider.addres AS provider,
            product.description,
            product.price,
            product.stock
        FROM
            product
        INNER JOIN provider ON provider.provider_id = product.provider_id
        WHERE
            product.name ILIKE '%$1#%'
    `, position)
    console.log(product)
    res.json({product: product })

});

router.get('/order', async function(req, res, next) {


    let product = await req.db.any(`
        SELECT
            product.product_id AS id,
            product.name,
            provider.addres AS provider,
            product.description,
            product.price,
            product.stock
        FROM
            product
        INNER JOIN provider ON provider.provider_id = product.provider_id
        ORDER BY
            product.price
    `)
    console.log(product)
    res.json({product: product })

});

router.get('/between', async function(req, res, next) {
    const { inbet, outbet } = req.query;

    let product = await req.db.any(`
        SELECT
            product.product_id AS id,
            product.name,
            provider.addres AS provider,
            product.description,
            product.price,
            product.stock
        FROM
            product
        INNER JOIN provider ON provider.provider_id = product.provider_id
        WHERE
            product.price BETWEEN $1 AND $2;
    `, [inbet, outbet])
    console.log(product)
    res.json({product: product })

});
module.exports = router;
