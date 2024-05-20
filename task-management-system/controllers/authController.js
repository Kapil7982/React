const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



function generateToken(user) {
  return jwt.sign({ user_id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
}


exports.register = async (req, res) => {
  try {
    const { phone_number, password, priority } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      phone_number,
      password: hashedPassword,
      priority
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user.id,
        phone_number: user.phone_number,
        priority: user.priority
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { phone_number, password } = req.body;
    const user = await User.findOne({ where: { phone_number } });

    if (!user) {
      return res.status(400).json({ error: 'Invalid phone number or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid phone number or password' });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
