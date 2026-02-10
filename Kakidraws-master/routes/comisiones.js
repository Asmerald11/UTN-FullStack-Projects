var express = require('express');
var router = express.Router();
const connection = require('../controladores/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('comisiones', { title: 'Comisiones' });
});

module.exports = router;
