var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('roles/list', { title: 'Роли' })

});

router.post('/create', async function(req, res, next) {

    let roles = req.body

    await req.db.none('INSERT INTO roles(code, label) VALUES(${code}, ${label})', roles);

    res.send({msg: ''})

});


router.post('/update', async function(req, res, next) {

    let roles = req.body

    await req.db.none("DO $do$ BEGIN IF (${code}<>'') THEN UPDATE roles SET code=${code} WHERE id=${id}; END IF; END $do$",roles);
    await req.db.none("DO $do$ BEGIN IF (${label}<>'') THEN UPDATE roles SET label=${label} WHERE id=${id}; END IF; END $do$",roles);
    res.send({msg: ''})

});


router.post('/delete', async function(req, res, next) {

    let roles = req.body

    await req.db.none("DO $do$ BEGIN IF (${id}<>'') THEN DELETE FROM roles WHERE id = ${id}; END IF; END $do$",roles);
    res.send({msg: ''})

});


module.exports = router;
