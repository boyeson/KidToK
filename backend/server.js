// Backend server code
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Express app configuration
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/kidTok', { useNewUrlParser: true, useUnifiedTopology: true });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});