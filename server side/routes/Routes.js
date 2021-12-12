const express = require('express');
const router = express.Router();

const { 
        getProducts,
        getSingleProduct
} = require('../controller/ProductsController')

router.get('/',getProducts);
router.get('/products/:id', getSingleProduct);


module.exports = router;