const Product = require('../models/ProductModel');

// getting All products
const getProducts = async(req, res) => {
    try {
        const allPorducts = await Product.find({});
        res.json(allPorducts)
    } catch (error) {
        console.log(`error in getProducts in controller and error is : `, error);
        res.status(404).json({message: 'Server Error'})
    }
}

/// Getting SingleProduct
const getSingleProduct = async(req,res) => {
    try {
        const {id} = req.params;
        const prod = await Product.findById(id)
        res.json(prod);
    } catch (error) {
        console.log(`error in getSingleProduct in controller and error is : `, error);
        res.status(404).json({message: 'server error'})
    }
}


module.exports = {
    getProducts,
    getSingleProduct
}