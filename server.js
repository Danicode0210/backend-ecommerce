const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const user = require("./routes/register")

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/users/", user)
app.use("/users/", user)


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
