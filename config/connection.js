const mysql2 = require('mysql2/promise');
const util = require('util');

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

    try {
        const connection = await mysql2.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'bicicleta',
        });
        console.log("Conectou no MySQL!");
        global.connection = connection;
        return connection;
    } catch (e) {
        console.log('Ocorreu um erro ao conectar no MySQL!', e);
    }
}

module.exports = { connect };
