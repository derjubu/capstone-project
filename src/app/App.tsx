import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Map from './pages/Map';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Map />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
