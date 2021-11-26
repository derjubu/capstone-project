import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DestinationType } from './utils/DestinationType';
import AddDestination from './pages/AddDestination/AddDestination';
import DestinationDetailView from './pages/DestinationDetailView/DestinationDetailView';
import MapView from './pages/MapView/MapView';

function App(): JSX.Element {
  const [destinations, setDestinations] = useState<DestinationType[]>([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddDestination />} />
        <Route
          path="/DestinationDetailView"
          element={<DestinationDetailView />}
        />
        <Route path="/map" element={<MapView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
