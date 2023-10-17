module.exports = app => {
    const heroes = require("../controllers/heroe.controller.js");

    const router = require("express").Router();

    // Crea un nuevo Heroe
    router.post("/", heroes.create);
    app.use("/api/heroes", router);
};