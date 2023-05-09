const express = require('express');
const cors = require('cors');
const app = express();
const crud = require('./routes/crud');

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use('/',crud)


const port = 8080;

app.listen(port, ()=> {
    console.log('server start!');
})

