const getExpeditiousCache = require('express-expeditious')
// Middleware para reducir el tiempo de carga
const defaultOptions = {
    namespace: 'expresscache', 
    defaultTlt: '1 minute',
    statusCodeExpires:{
        404: '5 minutes',
        500: 0
    }
}
const cacheInit = getExpeditiousCache(defaultOptions)
module.exports = {cacheInit}
