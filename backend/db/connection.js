const mysql = require('mysql2');
require('dotenv').config();
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});


module.exports = (callback)=>{
    pool.getConnection((err,conn)=>{
        if(!err){
            callback(conn);
        }else{
            console.error(err);
        }
    });
};