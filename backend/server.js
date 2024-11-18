// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Importing custom modules
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// Initializing Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Defining routes
app.use('/api/auth', authRoutes);

// Syncing the database
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((err) => {
    console.error('Database sync failed:', err);
  });

// Setting up server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
