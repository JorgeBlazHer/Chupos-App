const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ApuestaPorPersona = new Schema({
    persona: {
        type: String
    },
    descripcion: {
        type: String
    }

})

let ApuestaGlobal = new Schema({
    descripcion:{
        type: String,
        required: true
    },
    fechaFin:{
        type: Date
    },
    apuestas:{
        type: [ApuestaPorPersona]
    },
    fin: {
        type: Boolean,
        default: false,
        required: true
    },
    ganadaPor: {
        type: String
    },
    pass: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ApuestaGlobal', ApuestaGlobal)