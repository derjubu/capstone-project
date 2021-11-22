import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDestination from './pages/AddDestination/AddDestination';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddDestination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
