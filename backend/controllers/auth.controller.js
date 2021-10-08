const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { validationResult } = require('express-validator');

const User = require('../models/user.model');

const { JWT_TOKEN } = require('../config/variables');

const signIn = async (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(500).json({ message: 'Invalid credentials' });
    }

    const isValidPsw = await bcrypt.compare(password, user.password);
    if (!isValidPsw) {
      res.status(500).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = await jwt.sign({ user }, JWT_TOKEN, {
      expiresIn: '2h',
    });

    res.status(200).json({ message: 'Authentication completed', token });
  } catch (err) {
    res.status(500).json({ message: 'Authentication failed' });
  }
};

const signUp = async (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(500).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(12);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({ email, password: encryptedPassword });

    // Generate JWT
    const token = await jwt.sign({ newUser }, JWT_TOKEN, {
      expiresIn: '2h',
    });

    return res.status(200).json({ message: 'Registration completed', token });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed' });
  }
};

module.exports = {
  signIn,
  signUp,
};
