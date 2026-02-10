/*const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// coneccion a la base de datos
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'utnweb21-',
    database: 'kakiusuarios'
});

// funcion de login
exports.login = async (request, response) => {
    try {
        let email = request.body.email;
        let password = request.body.password;
        if (!email || !password) {
            return response.status(400).render('contacto', {
                message: 'Por favor inserte un email o contraseña'
            })
        }
        connection.query('SELECT * FROM usuarios WHERE email = ?', [email], (error, results) => {
            console.log(results);
            if (!results || !password) {
                response.status(401).render('contacto', {
                    message: 'Email o contraseña incorrectas'
                });
            } else {
                const id = results[0].id;
                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });
                console.log('The token is: ' + token);
                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }
                response.cookie('kaki', token, cookieOptions);
                response.status(200).redirect('/contactoa');
            }
        })
    } catch (error) {
        console.log(error);
    }
}

// funcion de registro
exports.register = (request, response) => {
    let username = request.body.username;
    let password = request.body.password;
    let confirmPassword = request.body.confirmPassword;
    let email = request.body.email;
    connection.query('SELECT email FROM usuarios WHERE email = ?', [email], (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return response.render('contacto', {
                message: 'Ese email ya esta en uso'
            });
        } else if (password !== confirmPassword) {
            return response.render('contacto', {
                message: 'Las contraseñas no coinciden'
            });
        }
        connection.query('INSERT INTO usuarios SET ?', { usuario: username, email: email, contraseña: password }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                return response.render('contacto', {
                    message: 'Usuario registrado'
                });
            }
        });
    });
};

// funcion post comentario
exports.comentarios = (req, res) => {
    let username = req.body.username;
    let comentario = req.body.comentario;
    connection.query('INSERT INTO comentarios SET ?', { usuario: username, comentario: comentario }, (error, results) => {
        if (error) {
            console.log("Error: ", error);
            res.send({
                "codigo": 400,
                "Fallo": "Ocurrio un error"
            });
        } else {
            res.render('contactoa', { message: 'Mensaje enviado' });
        }
    });
};

// funcion ver comentario
exports.coments = (req, res) => {
    connection.query('SELECT * FROM kakiusuarios.comentarios', (error, results, fields) => 
    {
        if(error) 
        {
            console.log("Error: ",error);
            res.send({
                "code": 400,
                "failed": "Error occurred"
            });
        } else {
            console.log("Results: ", results);
            res.render('comisionesa', {data: results});           
        }
    })};
*/
