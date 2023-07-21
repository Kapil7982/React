const express = require('express');

const { body, validationResult } = require('express-validator');

const User = require('../models/user.model')

const router = express.Router();

router.post(
    "", 
   body('first_name').notEmpty().withMessage("First name is mandatory"),
   body('age').custom( value =>{
    if(value < 18) throw new error("Age is mandatory and should be greater than 17");
    return true
   }),
   body('email')
   .notEmpty()
   .isEmail().
   withMessage("Email connot be empty! and it has to in correct format"),
   
   async function(req,res){

    const errors = validationResult(req);

    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()});
    }
        const user = await User.create(req.body);

        res.status(201).send({user});
})

module.exports = router;