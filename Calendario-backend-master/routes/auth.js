/* 
    Rutas para el path
    '/api/auth'
*/

const {crearUsuario, renovarToken} = require('../controllers/auth')
const { Check, check } = require('express-validator')
const validarCampos = require('../middlewares/validar-campos')

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Request received');

    res.json({
        message: 'Bienvenido a nuestra API'
    })
})

router.post('/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        check('email', 'El email es obligatiorio').not().isEmpty(),
        validarCampos
    ],


crearUsuario);
router.post('/renew', renovarToken);

module.exports = router;