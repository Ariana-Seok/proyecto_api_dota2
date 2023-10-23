const sql = require("./dataBase.js");

// Constructor

const Heroe = function(heroe) {
    this.nombre = heroe.nombre;
    this.atributo = heroe.atributo;
    this.tipo_de_ataque = heroe.tipo_de_ataque;
    this.complejidad = heroe.complejidad;
    this.imagen = heroe.imagen;
    this.url_view = heroe.url_view;
};

Heroe.create = (nuevoHeroe, result) => {
    sql.query("SELECT * FROM Heroes WHERE nombre = ?", nuevoHeroe.nombre, (err, rows) => {
        if(err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }


        if(rows.length === 0) {
            sql.query("INSERT INTO Heroes SET ?", nuevoHeroe, (err, res) => {
                if (err) {
                    console.log("Error:", err);
                    result(err, null);
                    return;
                }
                console.log("Heroe creado: ", { id: res.insertId, ...nuevoHeroe });
                result(null, { id: res.insertId, ...nuevoHeroe });
            });
        } 
    });
};


module.exports = Heroe;