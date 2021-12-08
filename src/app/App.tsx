import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDestination from './pages/AddDestination/AddDestination';
import DestinationDetailView from './pages/DestinationDetailView/DestinationDetailView';
import Itinerary from './pages/Itinerary/Itinerary';
import MongoTest from './pages/MongoTest/MongoTest';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Itinerary />} />
        <Route path="/addDestination" element={<AddDestination />} />
        <Route
          path="/DestinationDetailView"
          element={<DestinationDetailView />}
        />
        <Route path="/Mongo" element={<MongoTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
