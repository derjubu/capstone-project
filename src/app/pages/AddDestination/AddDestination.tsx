import React from 'react';
import styled from 'styled-components';
import CardTitle from '../../components/CardTitle/CardTitle';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import DestinationForm from '../../components/DestinationForm/DestinationForm';
import InputLabel from '../../components/InputLabel/InputLabel';
import useLocalStorage from '../../hooks/useLocalStorage';
import type { DestinationType } from '../../utils/DestinationType';

export default function AddDestination(): JSX.Element {
  const newDestination: DestinationType = {
    location: '',
    startDate: '',
    endDate: '',
  };

  const [newLocation, setNewLocation] = useLocalStorage(
    'location',
    newDestination.location
  );
  const [startDate, setStartDate] = useLocalStorage(
    'startDate',
    newDestination.startDate
  );
  const [endDate, setEndDate] = useLocalStorage(
    'endDate',
    newDestination.endDate
  );

  function goToDetailpage(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <DestinationForm onSubmit={goToDetailpage}>
      <CardTitle>Add a new destination</CardTitle>
      <InputLabel inputGridColumn="3/5" htmlFor="destination">
        Where do you want to go?
        <input
          id="destination"
          type="text"
          required
          value={newLocation}
          onChange={(event) => setNewLocation(event.target.value)}
          placeholder="Enter your destination"
        />
      </InputLabel>
      <InputLabel inputGridColumn="1/4" htmlFor="start-trip">
        When do you arrive?
        <input
          type="date"
          id="start-trip"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </InputLabel>
      <InputLabel inputGridColumn="4/-1" htmlFor="end-trip">
        When do you leave?
        <input
          type="date"
          id="end-trip"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </InputLabel>
      <DefaultButton to="/DestinationDetailView">Go</DefaultButton>
    </DestinationForm>
  );
}

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
