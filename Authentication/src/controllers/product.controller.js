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
        lister: user._id
    });

    return res.status(201).send({product});
})

module.exports = router;