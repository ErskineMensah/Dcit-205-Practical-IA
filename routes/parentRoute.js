// routes/patientRoutes.js
const express = require('express');
const bodyParser = require('body-parser');
const Patient = require('../models/Patient'); // Adjust the path based on your project structure

const router = express.Router();
router.use(bodyParser.json());

// Patient Registration Endpoint
router.post('/patients', async (req, res) => {
  try {
    const newPatient = await Patient.create(req.body);
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
