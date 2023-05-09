const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
require('dotenv').config();


app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE

});

app.get('/', (req, res) => {
    const sql = `SELECT * FROM student`;
    db.query(sql, (err, data)=> {
        if(err) return res.json('Error');
        return res.json(data)
    })
})

const port = 8080;

app.listen(port, ()=> {
    console.log('server start!');
})