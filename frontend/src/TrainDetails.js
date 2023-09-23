
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TrainDetails = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/trains/${trainId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTrain(data);
      })
      .catch((error) => {
        console.error('Error fetching train data:', error);
      });
  }, [trainId]);

  return (
    <div className="bg-blue-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Train Details</h1>

      {train ? (
        <div className="p-4 border border-gray-300 rounded bg-white">
          <h2 className="text-lg font-semibold">{train.trainName}</h2>
          <p>Train Number: {train.trainNumber}</p>
          <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
          <p>Seats Available: Sleeper: {train.seatsAvailable.sleeper}, AC: {train.seatsAvailable.AC}</p>
          <p>Price: Sleeper: {train.price.sleeper}, AC: {train.price.AC}</p>
          <p>Delayed By: {train.delayedBy} minutes</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TrainDetails;
