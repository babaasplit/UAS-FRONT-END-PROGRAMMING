const express = require('express');
const router = express.Router();

// Example route
router.post('/login', (req, res) => {
  res.send('Login route');
});

// Exporting the router
module.exports = router;
