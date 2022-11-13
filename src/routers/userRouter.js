const fs = require("fs");
const path = require("path");
const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');

//Rutas
router.get('/login', userController.login)
router.get('/register', userController.register)

module.exports = router