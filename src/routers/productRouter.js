const fs = require("fs");
const path = require("path");
const express = require('express')
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/create', productController.create)

module.exports = router