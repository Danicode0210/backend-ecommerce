const { findSourceMap } = require("module");
const userModel = require("../models/users");

// Registro de usuario
const createUser = (req,res) =>{
    let user = new User ({
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    })
    user.save((err,usr) =>{
        err && res.status(500).send(err.message),
        res.status(200).json(usr);
    })
}





// Validacion login 
const getUserId = async (req,res)  =>{
    try {
        const user = await userModel.findOne({ username: req.body.username });
        !user && res.status(400).json("Error clave o usuario incorrecto");
    
        const validated = await userModel.findOne({password: req.body.password});
        !validated && res.status(400).json("Error clave o usuario incorrecto");
    
        const {...others } = user._doc;
        res.status(200).json(others);
      } catch (err) {
        res.status(500).json(err);
      }
    // User.find find(req.params.username,req.params.password,(err,user)=>{
    //     err && res.status(500).send(err.message);
    //     res.status(200).json(user)
// })
}
module.exports = {createUser, getUserId}