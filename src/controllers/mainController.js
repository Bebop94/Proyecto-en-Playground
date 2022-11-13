const fs = require("fs");
const path = require("path");

//const prodsFilePath = path.join(__dirname, "../data/products-data-base.json");
//const products = JSON.parse(fs.readFileSync(prodsFilePath, 'utf-8'));

const mainController = {

    index: (req,res) => {
        res.render('index')
    }
}

module.exports = mainController