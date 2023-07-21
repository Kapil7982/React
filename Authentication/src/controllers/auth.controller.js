require('dotenv').config();

const jwt = require('jsonwebtoken');

const User = require('../models/user.model')

const newToken = (user) => {
    return jwt.sign({user:user}, process.env.JWT_SECRET_KEY)
}

const register = async (req, res) => {
    try {
      let user = await User.findOne({ email: req.body.email }).lean().exec();
      //console.log("user", user);
  
      if (user) {
        return res.status(400).send({ status: "failed", message: "Please try with a different email or password" });
      }
  
      
      //console.log("req.body:", req.body);
  
      user = await User.create(req.body);
      //console.log("user 24", user);
  
      if (!user) {
        return res.status(500).send({ status: "failed", message: "Please try again later" });
      }
  
      const token = newToken(user);
  
      res.status(201).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: "failed", message: "An error occurred. Please try again later." });
    }
  };
  

const login = async function(req,res){

    try {

        let user = await User.findOne({ email: req.body.email }).exec();

        if (!user) {
            return res.status(400).send({ status: "failed", message: "Please try with a different email or password" });
          }

          const match = await user.checkPassword(req.body.password);

          if(!match) 
          {
            return res.status(400).send({ status: "failed", message: "Please try with a different email or password" });
          }

          const token = newToken(user);
  
      res.status(201).json({ token });

        
    } catch (error) {
        console.error(error); // Log the error details to the console
    res.status(500).send({ status: "failed", message: "An error occurred. Please try again later." });
    }
    
}

module.exports = {register,login}