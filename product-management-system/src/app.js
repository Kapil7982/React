const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const app = express();

app.use(bodyParser.json());
app.use('/api/products', productRoutes);

module.exports = app;
