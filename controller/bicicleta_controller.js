const { connect } = require("../config/connection.js");

let bicicleta = {};



bicicleta.all = async function (req, res) {
  const con = await connect();
  try {
    let bicicletas = await con.query("SELECT * FROM bicicleta;");
    res.send(bicicletas);
    console.log("Busca efetuada com sucesso");
  } catch (e) {
    console.log("Ocorreu um erro ao buscar as bicicletas!", e);
  }
};

bicicleta.create = async function (req, res) {
    const con = await connect();
    try {
        let bicicleta = req.body;
        let sql = "INSERT INTO bicicleta(codigo_bicicleta, marca_bicicleta, cor_bicicleta) VALUES (?,?,?);";
        let values = [bicicleta.codigo_bicicleta, bicicleta.marca_bicicleta, bicicleta.cor_bicicleta];
            let result = await con.query(sql, values);
        res.send({
            status: "Inserção efetuada com sucesso",
            result: result
        });
        console.log("Inserção efetuada com sucesso");
    } catch (e) {
        console.log("Ocorreu um erro ao inserir o registro", e);
    }
}

module.exports = { bicicleta };
