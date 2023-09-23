
const mongoose = require('mongoose');
const Train = require('../model/train');


// Function to create a new train
const createTrain = async (req, res) => {
  try {
    const {
      trainName,
      trainNumber,
      departureTime,
      seatsAvailable,
      price,
      delayedBy,
    } = req.body; 

    const newTrain = new Train({
      trainName,
      trainNumber,
      departureTime,
      seatsAvailable,
      price,
      delayedBy,
    });

    await newTrain.save();

    res.status(201).json({
       message: 'Train created successfully',
       train: newTrain });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};




// function to fetch all trains
const getAllTrains = async (req, res) => {
  try {
    const allTrains = await Train.find();
    res.status(200).json(allTrains);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


  // Function to fetch a single train

  const getTrainById = async (req, res) => {
    try {
      const trainId = req.params.id;
  
      const train = await Train.findById(trainId);
  
      if (!train) {
        return res.status(404).json({ error: 'Train not found' });
      }
  
      res.status(200).json(train);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  module.exports = {
    createTrain,
    getAllTrains,
    getTrainById,
  };
  