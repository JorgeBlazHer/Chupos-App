const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Apuesta = new Schema({
    actor1: {
        type: String,
        required: true
    },
    actor2: {
        type: String,
        required: true
    },
    ganaActor1: {
        type: String
    },
    ganaActor2: {
        type: String
    },
    descripcion:{
        type: String,
        required: true
    },
    fechaFin:{
        type: Date,
        required: true
    },
    fin: {
        type: Boolean,
        default: false,
        required: true
    },
    ganadaPor: {
        type: String
    },
    pagada:{
        type: Boolean,
        default: false,
        required: true
    },
    pass: {
        type: String,
        required: true
    }
});


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

module.exports = mongoose.model('Apuesta', Apuesta)