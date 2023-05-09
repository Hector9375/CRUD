const db = require('../db/connection');

const createStudent = (req, res) => {
    let sql = `INSERT INTO student(Name, Email) VALUES('${req.body.Name}','${req.body.Email}')`;
    db((conn) => {
        conn.query(sql,(err, result, fileds) => {
            if(!err) {
                res.send(req.body);
            }else {
                console.error(err);
                res.status(500).send(err);
            }
        })
    })
}

const getStudent = (req, res) => {
    let sql = 'SELECT * FROM student';
    db((conn)=>{
        conn.query(sql,(err,result)=>{
            if(err) return res.status(500).send();
            res.json(result);
        })
    })
}

const updateStudent = (req, res) => {
    let sql = `UPDATE student SET Name='${req.body.Name}',Email='${req.body.Email}' WHERE id = ${req.params.id}`;
    db((conn) => {
        conn.query(sql,(err, result, fileds) => {
            if(!err) {
                res.send(result);
            }else {
                console.error(err);
                res.status(500).send(err);
            }
        })
    })
}

const deleteStudent = (req, res) => {
    let sql = `DELETE FROM student WHERE id = ${req.params.id}`;
    db((conn) => {
        conn.query(sql, (err, result, fileds) => {
            if(!err) {
                res.send(result);
            }else {
                console.error(err);
                res.status(500).send(err);
            }
        })
    })
}

module.exports = {
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent,
}

