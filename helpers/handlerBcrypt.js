const bcrypt = require('bcryptjs')


// Encriptando contraseña
const encrypt = async (textPlain) =>{
    const hash = await bcrypt.hash(textPlain, 10)
    return hash
}


//Comparando contraseña
const compare = async (passwordPlain, hashPassword) => {
    return await bcrypt.compare(passwordPlain, hashPassword)
}

module.exports = { encrypt, compare }