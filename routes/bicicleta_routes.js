const express = require("express");
const { bicicleta } = require("../controller/bicicleta_controller.js");

let router = express.Router();

router.get("/bicicletas", bicicleta.read);
router.post("/bicicletas/inserir", bicicleta.create);
router.put("/bicicletas/alterar/:codigo_bicicleta", bicicleta.update);

module.exports = { router };
