import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapView from './pages/MapView';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/map" element={<MapView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
