const fs = require("fs");
const path = require("path");
const express = require('express')
const router = express.Router();
const mainController = require('../controllers/mainController');

//Rutas que dirigen a index

router.get('/index', mainController.index);
router.get('/home', mainController.index);
router.get('/', mainController.index);

module.exports = router

