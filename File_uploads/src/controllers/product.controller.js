const express = require('express');
const Product = require('../modles/product.model');
const upload = require('../middlewares/file_upload');
const router = express.Router();

router.post("/single", upload.single("productImages"), async function(req, res) {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({ error: 'Name and Price are required fields.' });
    }

    const product = await Product.create({
      name: name,
      price: price,
      image_urls: req.file.path
    });

    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while creating the product.' });
  }
});

router.post("/multiple", upload.any("productImages"), async function(req, res) {
    try {
      const { name, price } = req.body;
  
      if (!name || !price) {
        return res.status(400).json({ error: 'Name and Price are required fields.' });
      }
  
      const filePaths = req.files.map(file => file.path);
  
      const product = await Product.create({
        name: name,
        price: price,
        image_urls: filePaths
      });
  
      return res.status(201).send(product);
    } catch (error) {
      return res.status(500).json({ error: 'An error occurred while creating the product.' });
    }
  });

module.exports = router;
