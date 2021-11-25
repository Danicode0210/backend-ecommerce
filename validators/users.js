const {check} = require('express-validator')
const {validateResult} = require('../helpers/validateHelper')


const validateCreate = [
    check('name')
    .exists()
    .not()
    .isEmpty(),
    check('lastname')
    .exists()
    .not()
    .isEmpty(),
    check('username')
    .exists()
    .not()
    .isEmpty(),
    check('password')
    .exists()
    .not()
    .isEmpty(),
    check('email')
    .exists()
    .isEmail(),
    (req,res, next) =>{
        validateResult(req, res, next)

    }
]
module.exports = {validateCreate}