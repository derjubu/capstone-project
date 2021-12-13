import React, { useState } from 'react';
import CardTitle from '../../components/CardTitle/CardTitle';
import DestinationForm from '../../components/DestinationForm/DestinationForm';
import InputField from '../../components/InputField/InputField';
import InputLabel from '../../components/InputLabel/InputLabel';
import { useNavigate } from 'react-router';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import type { DestinationType } from '../../utils/DestinationType';
import type { GeoJsonType } from '../../utils/GeoJsonType';
import MapWithMarker from '../../components/MapWithMarker/MapwithMarker';

export default function UpdateDestination(): JSX.Element {
  const currentDestination: DestinationType = JSON.parse(
    window.localStorage.getItem('destination') || '[]'
  );

  const [newStartDate, setNewStartDate] = useState(
    currentDestination.startDate
  );
  const [newEndDate, setNewEndDate] = useState(currentDestination.endDate);
  const [newLocation, setNewLocation] = useState<GeoJsonType>({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: currentDestination.location.geometry.coordinates,
    },
    properties: {
      name: currentDestination.location.properties.name,
    },
  });

  const navigate = useNavigate();

  function goToDetailpage(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const newDestination: DestinationType = {
      location: newLocation,
      startDate: newStartDate,
      endDate: newEndDate,
    };
    window.localStorage.destination = JSON.stringify(newDestination);
    console.log('Update');
    console.log(newDestination);
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
            value={newStartDate}
            onChange={(event) => setNewStartDate(event.target.value)}
          />
        </InputLabel>
        <InputLabel inputGridColumn="2/6" htmlFor="end-trip">
          When do you leave?
          <InputField
            type="date"
            id="end-trip"
            value={newEndDate}
            onChange={(event) => setNewEndDate(event.target.value)}
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
