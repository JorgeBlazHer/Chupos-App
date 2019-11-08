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
    fechaInicial:{
        type: Date,
        required: true
    },
    fechaFin:{
        type: Date
    },
    fin: {
        type: Boolean
    },
    ganadaPor: {
        type: String
    },
    pagada:{
        type: Boolean
    }
});

module.exports = mongoose.model('Apuesta', Apuesta)