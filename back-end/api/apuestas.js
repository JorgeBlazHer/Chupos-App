const express = require('express');
const app = express();
const apuestaRoute = express.Router();

// Apuesta model
let Apuesta = require('../database/models/apuesta');

// Add Apuesta
apuestaRoute.route('/create').post((req, res, next) => {
    Apuesta.create(req.body, (error, data) => {
        if (error) {
            
            console.log(error);
            res.status(404).json(error);
        } else {
            console.log(req.body);
            res.json(data);
        }
    })
});

// Get All Apuestas
apuestaRoute.route('/').get((req, res) => {
    console.log("llego");
    Apuesta.find((error, data) => {
        if (error) {
            res.status(404).json(error);
        } else {
            res.json(data)
        }
    })
})


// Get All Apuestas
apuestaRoute.route('/finalizadas').get((req, res) => {
    Apuesta.find({ fin: true }, (error, data) => {
        if (error) {
            res.status(404).json(error);
        } else {
            res.json(data)
        }
    })
})

// Get All Apuestas
apuestaRoute.route('/noFinalizadas').get((req, res) => {
    Apuesta.find({ fin: false }, (error, data) => {
        if (error) {
            res.status(404).json(error);
        } else {
            res.json(data)
        }
    })
})

// Get single apuesta
apuestaRoute.route('/read/:id').get((req, res) => {
    Apuesta.findById(req.params.id, (error, data) => {
        if (error) {
            res.status(404).json(error);
        } else {
            res.json(data)
        }
    })
})


// Update apuesta
apuestaRoute.route('/update/:id').put((req, res, next) => {
    Apuesta.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            res.status(404).json(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})

// Delete apuesta
apuestaRoute.route('/delete/:id').delete((req, res, next) => {
    Apuesta.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            res.status(404).json(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = apuestaRoute;