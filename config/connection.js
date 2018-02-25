
const mysql = require('mysql');
const oneCanNeverRemember = require('./keys.js');

var connection;

// Make connection.
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host: 'localhost',
    root: 3000,
    user: 'root',
    password: '',
    database: 'burgers'
});
}

// Export connection to ORM
module.exports = connection;