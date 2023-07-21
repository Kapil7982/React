const express = require('express');

const connect = require('./configs/db');

const productController = require('../src/controllers/product.controller');

const app = express();

app.use(express.json())

app.use("/products", productController);



app.listen(8888, async function(){

    await connect();
    console.log("Listening on port 8888")
})