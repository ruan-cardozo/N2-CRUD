const mysql2 = require('mysql2/promise');
const util = require('util');

export default async function connect() {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    try {
        const mysql = mysql2;
        const connection = await mysql.createConnection("mysql://root:root@localhost:3306/bicicleta");
        console.log("Conectou no MySQL!");
        global.connection = connection;
        return connection;
    } catch (e) {
        console.log('Ocorreu um erro ao conectar no MySQL!', e);
    }
}

exports.connect = connect;