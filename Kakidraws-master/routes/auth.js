const express = require('express');
const authController = require('../controladores/auth');
const router = express.Router();

router.post('/registro', authController.register);

router.post('/contactoa', authController.login);

router.post('/comentarios', authController.comentarios);

router.post('/comisionesa', authController.coments);

module.exports = router;
