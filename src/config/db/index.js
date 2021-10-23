var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MyNewPass",
    database: "sakila"
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