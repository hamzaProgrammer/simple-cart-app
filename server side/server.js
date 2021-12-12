const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'})
require('./config/db')
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(require('./routes/Routes'))


app.listen(port, (req,res) => {
    console.log("Server get connected")
})