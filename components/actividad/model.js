const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
    materia: {
        type: String,
        required: true,
    },
    curso: {
        type: String,
        required: true,
    },
    
    fecha_creacion: {
        type: Date,
        required: true,
    }
})

const model = mongoose.model('Actividad', mySchema)
module.exports = model