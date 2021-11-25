import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { useNavigate } from 'react-router';
import AddDestination from './pages/AddDestination/AddDestination';
import DestinationDetailView from './pages/DestinationDetailView/DestinationDetailView';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddDestination />} />
        <Route
          path="/DestinationDetailView"
          element={<DestinationDetailView />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
