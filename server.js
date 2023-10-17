const express = require('express');
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");
const Heroe = require("./app/models/heroe.model.js");

const port = 3000

var corsOptions = {
    origin: 'http://localhost:3000'
};


app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    fetch('https://6527fe95931d71583df1b5b2.mockapi.io/Heroe')
        .then(response => response.json())
        .then(data => { 
            console.log(data);
            res.json(data);
            data.forEach(element => {
                // Creaa un Heroe
                const heroe = new Heroe({
                    nombre: element.nombre,
                    atributo: element.atributo,
                    tipo_de_ataque: element.tipo_de_ataque,
                    complejidad: element.complejidad,
                    imagen: element.imagen || null
                });
            // Guarda Heroe en la Base de datos
            Heroe.create(heroe, (err, data) => {
                if(err){
                    res.status(500).send({
                        message:
                            err.message || "Some error ocurred while creating the Tutorial"
                    });
                } 
            });
        });
            

        }).catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error occurred');
        });
})

const heroeRoutes = require("./app/routes/heroe.routes.js");
heroeRoutes(app);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});







