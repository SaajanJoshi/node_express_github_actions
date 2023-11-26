// src/app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB (replace 'yourdatabase' with your actual database name)
mongoose.connect('mongodb://mongodb:27017/studentmgmt');

// Serve static HTML files
app.use(express.static(path.join(__dirname)));

// API routes
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');

app.use('/api', studentRoutes);
app.use('/api', courseRoutes);

// Catch-all route for serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
