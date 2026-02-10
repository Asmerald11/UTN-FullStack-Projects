const express = require('express');
/* const { validationResult } = require('express-validator') */
const Usuario = require('../Models/usuario')

const crearUsuario = async (req, res = express.response) => {
    console.log('req');
    console.log('req.body');

    const {name, email, password} = req.body;

/*  const errores = validationResult(req);

    console.log('errores');
 */

    const usuario = new Usuario(req.body);
    await usuario.save();

/*     if (password.length < 8 ) {
        return res.status(400).json({message: 'password too short'})
    } */


    return res.status(200).json({
        message: 'Creacion de un nuevo usuario',
        user: req.body
    })
}

const renovarToken = (req, res) => {
    console.log('Request received');

    res.json({
        message: 'Renovamos tu permiso con este token'
    })
}

module.exports = {
    crearUsuario,
    renovarToken
}