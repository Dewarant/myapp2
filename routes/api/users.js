var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {

    let users = await req.db.any(`
        SELECT
            users.user_id,
            users.login,
            users.username,
            roles.label AS role_label,
            users.email,
            users.password,
            users.created_at
        FROM
            users
        INNER JOIN roles ON roles.id = users.id_role
    `)
    console.log(users)
    res.json({users: users })

});

module.exports = router; 