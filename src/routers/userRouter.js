const fs = require("fs");
const path = require("path");
const express = require('express')
const router = express.Router();
const mainController = require('../controllers/userController');

module.exports = router