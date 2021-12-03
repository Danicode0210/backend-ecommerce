const { httpError } = require('../helpers/handlerError')
const { encrypt, compare } = require('../helpers/handlerBcrypt')
const userModel = require('../models/users')
const {tokenSign} = require('../helpers/tokenGenerate')

const registerCtrl = async (req, res) => {
    try {
        const {name, lastname, username, idType,
            userDocument, password, email} = req.body
        const passwordHash = await encrypt(password)
        const registerUser = await userModel.create({
            name, 
            lastname,
            username,
            idType,
            userDocument,
            password: passwordHash, 
            email
        })
        res.json({ data: registerUser})
    } catch (e) {
        httpError(res, e)
    }
}

const loginCtrl = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await userModel.findOne({ username })
        if(!user){
            res.json({error: 'El usuario no existe'})

        }
        const checkPassword = await compare(password, user.password)
        const tokenSession = await tokenSign(user)
        if(checkPassword){
            res.json({
                data: username,
                tokenSession
            })
            return
        }
        if(!checkPassword){
            res.json({
                error: 'La contraseña es incorrecta'
            })
            return
        }
    } catch (e) {
        httpError(res, e)
    }
}
module.exports = { registerCtrl, loginCtrl }