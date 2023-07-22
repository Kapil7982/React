require('dotenv').config()

const express = require('express');

const connect = require('./configs/db')

const productController = require('./controllers/product.controller')

const {register,login} = require('./controllers/auth.controller')

const app = express();

app.use(express.json());

app.post("/register", register);

app.post("/login", login);

app.use("/products", productController);

app.listen(process.env.SERVER_PORT, async function(){

    await connect();
    console.log(`Listening on port ${process.env.SERVER_PORT}`);
})