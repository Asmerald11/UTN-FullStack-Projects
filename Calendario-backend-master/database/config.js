const mongoose = require('mongoose');


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connection correct')
    } catch (error) {
        console.log(error)
        throw new Error('Error en la conexion con la DB')
    }
}

module.exports = {
    dbConnection,
}