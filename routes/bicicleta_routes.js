const express = require("express");
const { bicicleta } = require("../controller/bicicleta_controller.js");

let router = express.Router();

router.get("/bicicletas", bicicleta.read);
router.post("/bicicleta/inserir", bicicleta.create);
router.put("/bicicleta/alterar/:codigo_bicicleta", bicicleta.update);
router.delete("/bicicleta/deletar/:codigo_bicicleta", bicicleta.delete);
router.get("/bicicletas/buscar-bicicletas/", bicicleta.search);
module.exports = { router };
