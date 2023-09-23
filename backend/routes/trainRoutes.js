const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController'); 

router.post('/trains', trainController.createTrain);

router.get('/trains', trainController.getAllTrains);

router.get('/trains/:id', trainController.getTrainById);

module.exports = router;
