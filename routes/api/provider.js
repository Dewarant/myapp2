var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let provider = await req.db.any(`
        SELECT
            *
        FROM
            provider
    `)
    console.log(provider)
    res.json({provider: provider })

});

router.get('/group', async function(req, res, next) {

    let provider = await req.db.any(`
        SELECT COUNT(provider.prov_name),
            provider.addres
        FROM
            provider
        GROUP BY
            provider.addres
        HAVING COUNT(provider.prov_name)>0;
    `)
    console.log(provider)
    res.json({provider: provider })

});
module.exports = router;