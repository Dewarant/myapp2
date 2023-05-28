var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('provider/list', { title: 'Провайдеры' })

});

router.post('/create', async function(req, res, next) {

    let provider = req.body

    await req.db.none('INSERT INTO provider(prov_name, addres) VALUES(${prov_name}, ${addres})', provider);

    res.send({msg: ''})

});


router.post('/update', async function(req, res, next) {

    let provider = req.body

    await req.db.none("DO $do$ BEGIN IF (${prov_name}<>'') THEN UPDATE provider SET prov_name=${prov_name} WHERE provider_id=${provider_id}; END IF; END $do$",provider);
    await req.db.none("DO $do$ BEGIN IF (${addres}<>'') THEN UPDATE provider SET addres=${addres} WHERE provider_id=${provider_id}; END IF; END $do$",provider);
    res.send({msg: ''})

});


router.post('/delete', async function(req, res, next) {

    let provider = req.body

    await req.db.none("DO $do$ BEGIN IF (${provider_id}<>'') THEN DELETE FROM provider WHERE provider_id = ${provider_id}; END IF; END $do$",provider);
    res.send({msg: ''})

});

module.exports = router;