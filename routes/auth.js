const express = require('express');
const router = express.Router();
const { registerCtrl, loginCtrl  } = require('../controllers/auth')
const {validateCreate} = require('../validators/users')


router.post('/register', validateCreate, registerCtrl)
router.post('/login', loginCtrl)


module.exports = router