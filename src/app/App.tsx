import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDestination from './pages/AddDestination/AddDestination';
import DbTest from './pages/DbTest/DbTest';
import DestinationDetailView from './pages/DestinationDetailView/DestinationDetailView';
import Itinerary from './pages/Itinerary/Itinerary';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Itinerary />} />
        <Route path="/adddestination" element={<AddDestination />} />
        <Route
          path="/destinationdetailview"
          element={<DestinationDetailView />}
        />
        <Route path="/test" element={<DbTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
