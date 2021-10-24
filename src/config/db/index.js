var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "MyNewPass",
    database: "sakila",
    port: "3306"
  });

async function connect() {
    try {
        await con.connect();
        console.log('Connect successfully!!!');
    }
    catch (err) {
        console.log('Connect failure!!!');
    }
}
connect();
module.exports = con;