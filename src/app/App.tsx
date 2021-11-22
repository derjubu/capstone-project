import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDestination from './components/AddDestination/AddDestination';

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
