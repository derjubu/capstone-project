import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDestination from './pages/AddDestination/AddDestination';
import DestinationDetailView from './pages/DestinationDetailView/DestinationDetailView';
import Itinerary from './pages/Itinerary/Itinerary';
import UpdateDestination from './pages/UpdateDestination/UpdateDestination';

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
        <Route path="/updateDestination" element={<UpdateDestination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
