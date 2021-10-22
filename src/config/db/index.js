var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "myNewPass",
    database: "sakila"
  });

async function connect() {
    try {
        await con.connect();
        console.log('Connect successfully!!!');
        // con.query("SELECT * FROM film WHERE film_id = 1", function (err, result) {
        //     if (err) throw err;
        //     console.log(result);
        //   })
    }
    catch (err) {
        console.log('Connect failure!!!');
    }
}
connect();
module.exports = con;