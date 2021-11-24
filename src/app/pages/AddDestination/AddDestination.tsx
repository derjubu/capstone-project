import React from 'react';
import { useNavigate } from 'react-router';
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
  const navigate = useNavigate();

  function showDetailpage() {
    navigate('/DestinationDetailView');
  }

  return (
    <Destination onSubmit={onSubmit}>
      <TitleLocation>Add a new destination</TitleLocation>
      <LocationTrip htmlFor="destination">
        Where do you want to go?
        <input
          id="destination"
          type="text"
          required
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter your destination"
        />
      </LocationTrip>
      <StartTrip htmlFor="start-trip">
        When do you arrive?
        <input
          type="date"
          id="start-trip"
          value={startTrip}
          onChange={(event) => setStartTrip(event.target.value)}
        />
      </StartTrip>
      <EndTrip htmlFor="end-trip">
        When do you leave?
        <input
          type="date"
          id="end-trip"
          value={endTrip}
          onChange={(event) => setEndTrip(event.target.value)}
        />
      </EndTrip>
      <TitleActivities>What do you want to do here?</TitleActivities>
      <Tasklist activities={activities} setActivities={setActivities} />
      <AddTask onClick={showDetailpage}>Add to trip</AddTask>
    </Destination>
  );
}

const Destination = styled.form`
  list-style: none;
  max-width: 1400;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 5px;
  border: black solid 1px;
  border-radius: 5px;
  justify-items: center;
  text-align: center;
`;

const TitleLocation = styled.h1`
  text-align: center;
  justify-self: center;
  grid-column: 3/5;
`;

const LocationTrip = styled.label`
  text-align: center;
  justify-self: center;
  grid-column: 3/5;
`;

const StartTrip = styled.label`
  grid-column: 1 / span 3;
`;
const EndTrip = styled.label`
  grid-column: 4 / span 3;
`;

const TitleActivities = styled.h2`
  text-align: center;
  justify-self: center;
  grid-column: 3/5;
`;

const AddTask = styled.button`
  text-align: center;
  justify-self: center;
  grid-column: 3/5;
`;
