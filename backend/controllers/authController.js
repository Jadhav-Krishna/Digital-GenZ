const User = require('../models/Member');
const jwt = require('jsonwebtoken');

// Signup
exports.signup = async (req, res) => {
  try {
    const { name, email, password, skills, experience, portfolio } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All required fields must be filled' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const user = new User({ name, email, password, skills, experience, portfolio });
    await user.save();

    res.status(201).json({ message: 'Account created successfully', data: user });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'All required fields must be filled' });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    console.log("Password match:", isMatch);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    res.json({ message: 'Login successful', data: user });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Logout
exports.logout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
};

// Get Current User
exports.getMe = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select('-password');
    res.json({ data: user });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
