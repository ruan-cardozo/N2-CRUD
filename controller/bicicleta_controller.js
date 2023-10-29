const { connect } = require("../config/connection.js");

let bicicleta = {};

bicicleta.read = async function (req, res) {
  try {
    const con = await connect();
    let bicicletas = await con.query("SELECT * FROM bicicleta;");
    res.send(bicicletas);
    console.log("Busca efetuada com sucesso");
  } catch (e) {
    console.log("Ocorreu um erro ao buscar as bicicletas!", e);
  }
};

bicicleta.create = async function (req, res) {
  try {
    const con = await connect();
    let bicicleta = req.body;
    let sql =
      "INSERT INTO bicicleta(codigo_bicicleta, marca_bicicleta, cor_bicicleta) VALUES (?,?,?);";
    let values = [
      bicicleta.codigo_bicicleta,
      bicicleta.marca_bicicleta,
      bicicleta.cor_bicicleta,
    ];
    let result = await con.query(sql, values);
    res.send({
      status: "Inserção efetuada com sucesso",
      result: result,
    });
    console.log("Inserção efetuada com sucesso");
  } catch (e) {
    console.log("Ocorreu um erro ao inserir o registro", e);
  }
};

bicicleta.update = async function (req, res) {
  try {
    const con = await connect();
    let bicicletaId = req.params.codigo_bicicleta;
    let bicicletaEditada = req.body;

    let sql =
      "UPDATE bicicleta SET marca_bicicleta=?, cor_bicicleta=? WHERE codigo_bicicleta=?;";
    let values = [
      bicicletaId,
      bicicletaEditada.marca_bicicleta,
      bicicletaEditada.cor_bicicleta,
    ];

    let result = await con.query(sql, values);
    res.send({
      status: "Edição feita com sucesso",
      result: result,
    });
    console.log("Edição feita com sucesso");
  } catch (e) {
    console.log("Ocorreu um erro ao editar/achar esse registro", e);
  }
};

bicicleta.delete = async function (req, res) {
  try {
    const con = await connect();
    let bicicletaId = req.params.codigo_bicicleta;

    let sql = "DELETE from bicicleta where codigo_bicicleta=?;";
    let result = await con.query(sql, [bicicletaId]);
    res.send({
      status: "Registro excluido com sucesso",
      result: result,
    });
    console.log("Registro excluido com sucesso");
  } catch (e) {
    console.log("Ocorreu um erro ao excluir esse registro", e);
  }
};

bicicleta.search = async function (req, res) {
  const { cor, marca } = req.query;
  try {
    const con = await connect();
    let sql = "SELECT * FROM  bicicleta WHERE 1 ";
    if (cor) {
      sql += `AND cor_bicicleta LIKE '%${cor}%'`;
    }
    if (marca) {
      sql += `AND marca_bicicleta ='${marca} ';`;
    }
    const [result] = await con.query(sql);
    res.send({
      status: "Pesquisa feita com sucesso",
      result: result,
    });
    console.log("Pesquisa feita com sucesso");
    console.log(result);
  } catch (e) {
    console.log(
      "Ocorreu um erro ao pesquisar esse modelo e cor de bicicleta",
      e
    );
  }
};

module.exports = { bicicleta };
