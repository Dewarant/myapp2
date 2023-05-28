var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    res.render('users/list', { title: 'Пользователи' })

});


router.post('/create', async function(req, res, next) {

    let users = req.body

    await req.db.none('INSERT INTO users(username, login, id_role, email, password) VALUES(${username}, ${login}, ${id_role}, ${email}, ${password})', users);

    res.send({msg: ''})

});


router.post('/update', async function(req, res, next) {

    let users = req.body

    await req.db.none("DO $do$ BEGIN IF (${login}<>'') THEN UPDATE users SET login=${login} WHERE user_id=${id}; END IF; END $do$",users);
    await req.db.none("DO $do$ BEGIN IF (${email}<>'') THEN UPDATE users SET email=${email} WHERE user_id=${id}; END IF; END $do$",users);
    await req.db.none("DO $do$ BEGIN IF (${password}<>'') THEN UPDATE users SET password=${password} WHERE user_id=${id}; END IF; END $do$",users);
    res.send({msg: ''})

});

module.exports = router; 