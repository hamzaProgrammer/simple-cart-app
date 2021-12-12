const ProductsData = require('./data/ProductsDetails');
const Product = require('./models/ProductModel');

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(ProductsData)

        console.log("Data import successfull");

        process.exit();
    } catch (error) {
        console.log(`error in seederScript.js and error is : `, error)
    }
}

importData();