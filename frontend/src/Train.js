import React, { useState, useEffect } from 'react';
import TrainDetails from './TrainDetails';

const TrainList = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
const trainData= async() => {
    fetch('http://localhost:3001/api/trains') // Replace with your API endpoint
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      setTrains(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching train data:', error);
      setLoading(false);
    });
 
  

} 
trainData();
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Train List</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {trains.map((train) => (
            <div 
              key={train._id}
              className="p-4 border border-gray-300 rounded bg-white"
            >
              <h2 className="text-lg font-semibold">{train.trainName}</h2>
              <p>Train Number: {train.trainNumber}</p>
              <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
              <p>Seats Available: Sleeper: {train.seatsAvailable.sleeper}, AC: {train.seatsAvailable.AC}</p>
              <p>Price: Sleeper: {train.price.sleeper}, AC: {train.price.AC}</p>
              <p>Delayed By: {train.delayedBy} minutes</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrainList;
