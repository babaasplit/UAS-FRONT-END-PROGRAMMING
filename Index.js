const express = require('express');
const app = express();

// Set port
const PORT = process.env.PORT || 3000;

// Test route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
