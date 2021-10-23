const express = require('express');
const mysql = require('mysql');

//const db = require('./config/db');
const route = require('./routes');

// connect to db
//db.connect();

const app = express();
const port = process.env.port || 3000;

// route init
route(app);

app.listen(
    port, () =>
    console.log(`App listening at http://localhost:${port}`),
);

// app.use(
//     express.urlencoded({
//         extended: true,
//     }),
// );
app.use(express.json());
