const fs = require("fs");
const path = require("path");

const prodsFilePath = path.join(__dirname, "../data/product-inventory.json");
const products = JSON.parse(fs.readFileSync(prodsFilePath, 'utf-8'));

const mainController = {

    index: (req,res) => {
        let lastSearchedProducts = products.filter( product => {
            return product.lastSearched == true
        })

        let discountProducts = products.filter( product => {
            return product.oferta == true
        })

        res.render('index', {lastSearchedProducts, discountProducts})
    }
}

module.exports = mainController