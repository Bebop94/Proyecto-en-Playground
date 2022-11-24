const fs = require("fs");
const path = require("path");

const prodsFilePath = path.join(__dirname, "../data/product-inventory.json");
const products = JSON.parse(fs.readFileSync(prodsFilePath, 'utf-8'));

const productController = {

    create: (req, res) => {
        res.render('products/create-product')
    }
}

module.exports = productController