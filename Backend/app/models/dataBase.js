const mysql = require("mysql2");
const dataBaseConfig = require("../config/db.config.js");


// Creamos la conexion a la base de datos

const connection = mysql.createConnection({
    host: dataBaseConfig.HOST,
    user: dataBaseConfig.USER,
    password: dataBaseConfig.PASSWORD,
    database: dataBaseConfig.DB
});

// Abri la coneccion MySQL

connection.connect(error => {
    if(error) throw error;
    console.log("Se ha conectado correctamente");
});




module.exports = connection;