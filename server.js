require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const user = require("./routes/auth")

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", require('./routes'))




mongoose.connect(
    "mongodb://localhost/users",
    {useNewUrlParser:true},
    (err,res) => {
        err && console.log('Error conectando a la bd')
        app.listen(4000,()=>{
            console.log('Servidor corriendo en http://localhost:4000');
        })
    }
)
