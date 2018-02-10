
// node dependency
const mysql = require('mysql');

let connection;

// Heroku | Local MySQL Db
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '', 
    database : 'burgers_db' 
  });
}

module.exports = connection;