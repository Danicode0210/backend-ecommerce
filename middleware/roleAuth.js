const { verifyToken } = require('../helpers/tokenGenerate')
const userModel = require('../models/users')

const checkRoleAuth = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop() 
        const tokenData = await verifyToken(token)
        const userData = await userModel.findById(tokenData._id) 
        if ([].concat(roles).includes(userData.role)) { 
            next()
        } else {
            res.status(403)
            res.send({ error: 'No tienes permisos' })
        }

    } catch (e) {
        console.log(e)
        res.status(402)
        res.send({ error: 'Acceso denegado' })
    }

}

module.exports = {checkRoleAuth}