import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { useNavigate } from 'react-router';
import AddDestination from './pages/AddDestination/AddDestination';
import DestinationDetailView from './pages/DestinationDetailView/DestinationDetailView';

function App(): JSX.Element {
  const [activities, setActivities] = useState(['Climbing', 'Walking']);
  const [location, setLocation] = useState('');
  const [startTrip, setStartTrip] = useState('');
  const [endTrip, setEndTrip] = useState('');

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(location, startTrip, endTrip, activities);
    setLocation('');
    setStartTrip('');
    setEndTrip('');
    setActivities([]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AddDestination
              activities={activities}
              setActivities={setActivities}
              location={location}
              setLocation={setLocation}
              startTrip={startTrip}
              setStartTrip={setStartTrip}
              endTrip={endTrip}
              setEndTrip={setEndTrip}
              onSubmit={onSubmit}
            />
          }
        />
        <Route
          path="/DestinationDetailView"
          element={
            <DestinationDetailView
              activities={activities}
              location={location}
              startTrip={startTrip}
              endTrip={endTrip}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
