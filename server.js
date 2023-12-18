// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes'); 

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/DcitIAPracticalDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use(patientRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
