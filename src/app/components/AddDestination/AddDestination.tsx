import React, { useState } from 'react';
import styled from 'styled-components';

export default function AddDestination({}): JSX.Element {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(location, startTrip, endTrip);
  }

  const [location, setLocation] = useState('');
  const [startTrip, setStartTrip] = useState('');
  const [endTrip, setEndTrip] = useState('');

  return (
    <Destination onSubmit={onSubmit}>
      <h1>Add a new destination</h1>
      <label htmlFor="destination">
        Where do you want to go?
        <input
          id="destination"
          type="text"
          required
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter your destination"
        />
      </label>
      <label htmlFor="start-trip">
        When do you arrive?
        <input
          type="date"
          id="start-trip"
          value={startTrip}
          onChange={(event) => setStartTrip(event.target.value)}
        />
      </label>
      <label htmlFor="end-trip">
        When do you leave?
        <input
          type="date"
          id="end-trip"
          value={endTrip}
          onChange={(event) => setEndTrip(event.target.value)}
        />
      </label>
      <button>Add to trip</button>
    </Destination>
  );
}

const Destination = styled.form`
  list-style: none;
`;
