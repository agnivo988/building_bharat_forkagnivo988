const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running...');
});

const PORT = process.env.PORT || 5000;

// Start server even if MongoDB connection fails
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
  // Try to connect to MongoDB
  if (process.env.MONGO_URI) {
    mongoose.connect(process.env.MONGO_URI)
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.log('MongoDB connection failed:', err.message));
  } else {
    console.log('MONGO_URI not provided, skipping MongoDB connection');
  }
});
