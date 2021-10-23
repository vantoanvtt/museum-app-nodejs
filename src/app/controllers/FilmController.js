

const mysql = require('mysql');

const db = require('../../config/db');

module.exports = {
    index: (req, res) => {
        res.send('FILMMMMMMMMMMMM');
    },
    detail: (req, res) => {
        //console.log(req.params.id)
        let sql = 'SELECT * FROM film WHERE film_id = ?';
        db.query(sql,[req.params.id], (err, response) => {
            if (err) throw err
            //console.log(response);
            res.json(response)
        });
    }
}