import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Train from './Train';
import TrainDetails from './TrainDetails';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Train />}>
      </Route>
      <Route path="/trainDetails" element={<TrainDetails />}>
      </Route>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App
