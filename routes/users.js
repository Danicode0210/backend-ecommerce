const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const {getItems, getItem, createItem, deleteItem, updateItem} = require('../controllers/user')
const {checkAuth} = require('../middleware/auth')
const {checkRoleAuth} = require('../middleware/roleAuth')
const {validateCreate} = require('../validators/users')

router.get('/', checkAuth, checkRoleAuth(['admin']), getItems)
router.get('/:id', getItems)
router.post('/', checkOrigin, createItem)
router.patch('/;id', getItems)
router.delete('/:id', getItems)

module.exports = router