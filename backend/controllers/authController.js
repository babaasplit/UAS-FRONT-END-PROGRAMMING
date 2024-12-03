const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
  const { fullname, email, username, password } = req.body;

  try {
    const newUser = await userModel.createUser(fullname, email, username, password);
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    if (error.message === 'Email is already registered') {
      return res.status(400).json({ message: 'This email is already in use. Please use a different email.' });
    }
    console.error('Error registering user:', error.message);
    res.status(500).json({ message: 'An error occurred while registering the user', error: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Cari user berdasarkan username
    const user = await userModel.findUserByUsername(username);
    if (!user) {
      return res.status(400).json({ message: 'Invalid username.' });
    }

    // Verifikasi password yang diberikan dengan yang ada di database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password.' });
    }

    // Jika password valid, buat token JWT
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Kirim respon dengan token
    res.status(200).json({ message: 'Login successful.', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in.', error });
  }
};


module.exports = { register, login };
