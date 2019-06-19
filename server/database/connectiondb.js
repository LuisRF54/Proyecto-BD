const { Client } = require('pg');

const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'MinerUCAB',
    password: 'nmrm2014',
    port: 5432,
};

const client = new Client(connectionData)

client.connect()
    .then(response => {
        console.log('DB is connected')
    })
    .catch(err => {
        console.log('DB is not connected :c');
        client.end();
    })

module.exports = client;