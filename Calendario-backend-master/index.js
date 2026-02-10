const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const port = 8080;


const app = express();
dbConnection();


app.use(express.static('public'))
app.use(express.json());
app.use('/api/auth', require('./routes/auth'))


/* app.get('/', (req, res) => {
    console.log('Request received');

    res.json({
        message: 'Bienvenido a nuestra API'
    })
})

app.get('/new', (req, res) => {
    console.log('Request received');

    res.json({
        message: 'Creacion de un nuevo usuario'
    })
})

app.get('/renew', (req, res) => {
    console.log('Request received');

    res.json({
        message: 'Renovamos tu permiso con este token'
    })
}) */


/* app.listen(process.env.port, () => {
    console.log(`listening on port ${port}`);
}); */



app.listen(port, () => {
    console.log(`listening on port ${port}`);
});