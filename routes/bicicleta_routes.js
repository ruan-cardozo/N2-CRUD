const express = require("express");
const { bicicleta } = require("../controller/bicicleta_controller.js");

let router = express.Router();

router.get("/bicicletas", bicicleta.all);
router.post("/bicicletas/inserir", bicicleta.create);
router.put("/bicicletas/alterar/:id", bicicleta.update);
module.exports = { router };
