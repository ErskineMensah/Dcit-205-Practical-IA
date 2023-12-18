// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes'); // Adjust the path based on your project structure

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/hospitalDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use(patientRoutes); // Use the patientRoutes for patient-related endpoints

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
