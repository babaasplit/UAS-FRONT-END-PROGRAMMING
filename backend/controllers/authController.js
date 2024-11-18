const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// Sign Up
exports.signup = async (req, res) => {
 const { username, email, password } = req.body;
 try {
   // Hash password
   const hashedPassword = await bcrypt.hash(password, 10);
   // Simpan user baru
   const newUser = await User.create({ username, email, password: hashedPassword });
   res.status(201).json({ message: 'User created successfully', user: newUser });
 } catch (err) {
   res.status(500).json({ error: 'Failed to create user', details: err });
 }
};
// Login
exports.login = async (req, res) => {
 const { email, password } = req.body;
 try {
   const user = await User.findOne({ where: { email } });
   if (!user) return res.status(404).json({ error: 'User not found' });
   const isPasswordValid = await bcrypt.compare(password, user.password);
   if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });
   // Generate token
   const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
   res.status(200).json({ message: 'Login successful', token });
 } catch (err) {
   res.status(500).json({ error: 'Login failed', details: err });
 }
};