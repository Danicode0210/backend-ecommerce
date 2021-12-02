const {check} = require('express-validator')
const {validateResult} = require('../helpers/validateHelper')


const validateCreate = [
    check('name', 'Ingrese sus nombres completos')
    .exists()
    .not()
    .isEmpty(),
    check('lastname','Ingrese sus apellidos completos')
    .exists()
    .not()
    .isEmpty(),
    check('username')
          .not()
          .isEmpty()
          .withMessage('Es necesario ingresar un Nombre de usuario')
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
    .isLength({ min: 5 })
    .withMessage('La contraseña debe tener más de 8 dígitos y contener números')
    .matches(/\d/)
    .withMessage('La contraseña debe contener al menos 2 numeros'),
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