var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('acerca', { title: 'Acerca de mi' });
});

module.exports = router;
