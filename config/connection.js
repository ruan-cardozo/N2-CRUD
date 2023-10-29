const mysql2 = require("mysql2/promise");
const util = require("util");
require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbname = process.env.DB_NAME; 

async function connect() {
  if (global.connection && global.connection.state !== "disconnected") {
    return global.connection;
  }

  try {
      const connection = await mysql2.createConnection({
      host: dbHost,
      user: dbUser,
      password: dbPass ,
      database: dbname,
    });
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
  } catch (e) {
    console.log("Ocorreu um erro ao conectar no MySQL!", e);
  }
}

module.exports = { connect };
