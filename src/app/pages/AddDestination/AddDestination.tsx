import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
//import Tasklist from '../../components/Tasklist/Tasklist';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function AddDestination({}): JSX.Element {
  const destination = {
    location: '',
    startDate: new Date(),
    endDate: new Date(),
  };
  //const navigate = useNavigate();
  /* const [activities, setActivities] = useLocalStorage<{ activity: string }[]>(
    'activities',
    destination.activities
  ); */
  const [newLocation, setNewLocation] = useLocalStorage<string>(
    'location',
    destination.location
  );
  const [startDate, setStartDate] = useLocalStorage<Date>(
    'startDate',
    destination.startDate
  );
  const [endDate, setEndDate] = useLocalStorage<Date>(
    'endDate',
    destination.endDate
  );

  function showDetailpage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    destination.location = newLocation;
    console.log(destination);
  }

  return (
    <Destination onSubmit={showDetailpage}>
      <TitleLocation>Add a new destination</TitleLocation>
      <LocationTrip htmlFor="destination">
        Where do you want to go?
        <input
          id="destination"
          type="text"
          required
          value={newLocation}
          onChange={(event) => setNewLocation(event.target.value)}
          placeholder="Enter your destination"
        />
      </LocationTrip>
      <StartTrip htmlFor="start-trip">
        When do you arrive?
        <input
          type="date"
          id="start-trip"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </StartTrip>
      <EndTrip htmlFor="end-trip">
        When do you leave?
        <input
          type="date"
          id="end-trip"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </EndTrip>
      {/* <TitleActivities>What do you want to do here?</TitleActivities>
      <Tasklist
        activities={destination.activities}
        setActivities={setActivities}
      />
      <AddTask>Add to trip</AddTask> */}
      <button>Go!</button>
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

/* const TitleActivities = styled.h2`
  text-align: center;
  justify-self: center;
  grid-column: 3/5;
`; */

/* const AddTask = styled.button`
  text-align: center;
  justify-self: center;
  grid-column: 3/5;
`; */
