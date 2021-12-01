import React, { useState } from 'react';
import CardTitle from '../../components/CardTitle/CardTitle';
import DestinationForm from '../../components/DestinationForm/DestinationForm';
import InputField from '../../components/InputField/InputField';
import InputLabel from '../../components/InputLabel/InputLabel';
import { useNavigate } from 'react-router';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import MapWithMarker from '../../components/LocationMap/MapwithMarker';
import { DestinationType } from '../../utils/DestinationType';

export default function AddDestination(): JSX.Element {
  const [newDestination, setNewDestination] = useState<DestinationType>({
    location: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [0, 52],
      },
      properties: {
        name: '',
      },
    },
    startDate: '',
    endDate: '',
  });

  const [startDate, setStartDate] = useState(newDestination.startDate);
  const [endDate, setEndDate] = useState(newDestination.endDate);
  const [newLocation, setNewLocation] = useState(newDestination.location);

  const navigate = useNavigate();

  function goToDetailpage(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    window.localStorage.destination = JSON.stringify(newDestination);
    console.log(newLocation);
    //navigate('/DestinationDetailView');
  }

  return (
    <>
      <DestinationForm onSubmit={goToDetailpage}>
        <CardTitle>Add a new destination</CardTitle>
        <InputLabel inputGridColumn="2/6" htmlFor="destination">
          Where do you want to go?
          <div id="destination"></div>
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
        <DefaultButton>Go</DefaultButton>
      </DestinationForm>
      <MapWithMarker
        displayArea={'#destination'}
        onChange={(event) => setNewLocation(event)}
      />
    </>
  );
}
