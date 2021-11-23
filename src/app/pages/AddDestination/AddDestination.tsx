import React from 'react';
import styled from 'styled-components';
import Tasklist from '../../components/Tasklist/Tasklist';

type AddDestinationProps = {
  activities: string[];
  setActivities: (activities: string[]) => void;
  location: string;
  setLocation: (location: string) => void;
  startTrip: string;
  setStartTrip: (startTrip: string) => void;
  endTrip: string;
  setEndTrip: (endTrip: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function AddDestination({
  activities,
  setActivities,
  location,
  setLocation,
  startTrip,
  setStartTrip,
  endTrip,
  setEndTrip,
  onSubmit,
}: AddDestinationProps): JSX.Element {
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
      <h2>What do you want to do here?</h2>
      <Tasklist activities={activities} setActivities={setActivities} />
      <button>Add to trip</button>
    </Destination>
  );
}

const Destination = styled.form`
  list-style: none;
`;
