const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');  // Import the auth routes

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(cors());
// Use the auth routes
app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
