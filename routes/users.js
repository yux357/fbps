var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('users', {
        title: 'Express & ejs',
        content : 'hello world'
    });
});

module.exports = router;
