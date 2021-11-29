import React from 'react';
import styled from 'styled-components';
import CardTitle from '../../components/CardTitle/CardTitle';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import DestinationForm from '../../components/DestinationForm/DestinationForm';
import InputField from '../../components/InputField/InputField';
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
      <InputLabel inputGridColumn="2/6" htmlFor="destination">
        Where do you want to go?
        <InputField
          id="destination"
          type="text"
          required
          value={newLocation}
          onChange={(event) => setNewLocation(event.target.value)}
          placeholder="Enter your destination"
        />
      </InputLabel>
      <InputLabel inputGridColumn="2/6" htmlFor="start-trip">
        When do you arrive?
        <InputField
          type="date"
          id="start-trip"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </InputLabel>
      <InputLabel inputGridColumn="2/6" htmlFor="end-trip">
        When do you leave?
        <InputField
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
