const express = require('express');


const Product = require('../models/product.model');

const authenticate = require('../middlewares/authenticate');

const authorize = require('../middlewares/authorize');



const router = express.Router();

router.post("", authenticate, authorize(["admin","seller"]), async (req, res)=>{

    const {user} = req.user

    const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        lister: user._id
    });

    return res.status(201).send({product});
})

router.get('/', authenticate, authorize(["admin","seller"]), async (req, res) => {
    try {
      const products = await Product.find(); 
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;