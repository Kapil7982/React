const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      console.log("No authorization header found");
      return res.status(401).json({ error: 'Authorization header missing' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      console.log("No token found in authorization header");
      return res.status(401).json({ error: 'Token missing' });
    }

    const decoded = jwt.verify(token, 'your_jwt_secret');
    const user = await User.findByPk(decoded.user_id);

    if (!user) {
      console.log("User not found");
      return res.status(401).json({ error: 'Authentication failed' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Authentication error:", error.message);
    res.status(401).json({ error: 'Authentication failed' });
  }
};
