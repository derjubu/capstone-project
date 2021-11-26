import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { useNavigate } from 'react-router';
import AddDestination from './pages/AddDestination/AddDestination';
import DestinationDetailView from './pages/DestinationDetailView/DestinationDetailView';
import MapView from './pages/MapView/MapView';

type Destination = {
  location: string;
  startDate: string;
  endDate: string;
};

function App(): JSX.Element {
  const [destinations, setDestinations] = useState<Destination[]>([]);

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
