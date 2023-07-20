
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Set the minimum and maximum TLS version
const tls = require('tls');
tls.DEFAULT_MIN_VERSION = 'TLSv1.2';
tls.DEFAULT_MAX_VERSION = 'TLSv1.2';

const express = require('express');

const connect = require('./config/db');
const userController = require('../src/controllers/user.controller')

const app = express();

app.use("/users", userController);



app.listen(8888, async function(){
    await connect();
    console.log("Listening on port 8888");
})