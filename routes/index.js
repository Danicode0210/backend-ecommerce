const express = require('express')
const router = express.Router()
const fs = require('fs')

const pathRouter = `${__dirname}`

const revomeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) =>{
    const fileWithOutExt = revomeExtension(file)
    const skip = ['index'].includes(fileWithOutExt)
    if(!skip){
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`))
        console.log('=>', fileWithOutExt)
    }
})
router.get('*', (req,res)=>{
    res.status(404)
    res.send({error: 'No se encontro dicha pagina'})
})
module.exports = router


