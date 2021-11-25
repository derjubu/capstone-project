import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { useNavigate } from 'react-router';
import AddDestination from './pages/AddDestination/AddDestination';
import DestinationDetailView from './pages/DestinationDetailView/DestinationDetailView';
import MapView from './pages/MapView/MapView';

function App(): JSX.Element {
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
