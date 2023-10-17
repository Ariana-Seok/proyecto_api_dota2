const Heroe = require("../models/heroe.model.js");

// Crea y guarda un nuevo Heroe

exports.create = (req, res) => {
    console.log(req);
    // Valida 
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Creaa un Heroe

    const heroe = new Heroe({
        nombre: req.body.nombre,
        atributo: req.body.atributo,
        tipo_de_ataque: req.body.tipo_de_ataque,
        complejidad: req.body.complejidad,
        imagen: req.body.imagen || null
    });

    // Guarda Heroe en la Base de datos
    Heroe.create(heroe, (err, data) => {
        if(err){
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating the Tutorial"
            });
        } else {
            res.send(201).send(data);
        }
    });
};