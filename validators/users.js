const {check} = require('express-validator')
const {validateResult} = require('../helpers/validateHelper')


const validateCreate = [
    check('name', 'Ingresa un noombre valido')
    .exists()
    .not()
    .isEmpty(),
    check('lastname')
    .exists()
    .not()
    .isEmpty(),
    check('username')
          .not()
          .isEmpty()
          .withMessage('Es necesario ingresar un Nombre de Usuario')
          .custom((value, {req}) => {
            return new Promise((resolve, reject) => {
              User.findOne({username:req.body.username}, function(err, user){
                if(err) {
                  reject(new Error('Error en el servidor'))
                }
                if(Boolean(user)) {
                  reject(new Error('Este Nombre de usuario ya esta en uso'))
                }
                resolve(true)
              });
            });
          }),
    check('password')
    .exists()
    .not()
    .isEmpty(),
    check('email')
          .not()
          .isEmpty()
          .withMessage('Es necesario ingresar un Email')
          .isEmail()
          .withMessage('Invalid Email')
          .custom((value, {req}) => {
            return new Promise((resolve, reject) => {
              User.findOne({email:req.body.email}, function(err, user){
                if(err) {
                  reject(new Error('Error en el servidor'))
                }
                if(Boolean(user)) {
                  reject(new Error('Este Email ya se encuentra registrado'))
                }
                resolve(true)
              });
            });
          }),
    (req,res, next) =>{
        validateResult(req, res, next)

    }
]
module.exports = {validateCreate}