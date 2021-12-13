import React, { useEffect, useState } from 'react';
import CardTitle from '../../components/CardTitle/CardTitle';
import DestinationForm from '../../components/DestinationForm/DestinationForm';
import InputField from '../../components/InputField/InputField';
import InputLabel from '../../components/InputLabel/InputLabel';
import { useNavigate } from 'react-router';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import type { DestinationType } from '../../utils/DestinationType';
import type { GeoJsonType } from '../../utils/GeoJsonType';
import MapWithMarker from '../../components/MapWithMarker/MapwithMarker';
import useFetch from '../../hooks/useFetch';

export default function UpdateDestination(): JSX.Element {
  const currentId = window.localStorage
    .getItem('UpdateId')
    ?.replaceAll('"', '');
  const mongoData = useFetch(`/api/location/${currentId}`);
  const [currentDestination, setCurrentDestination]: any = useState([
    {
      newDestination: {
        endDate: '',
        startDate: '',
        location: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [0, 0],
          },
          properties: {
            name: 'Please Wait...',
          },
        },
      },
    },
  ]);

  console.log(`/api/location/${currentId}`);
  console.log(currentDestination);
  console.log(mongoData);

  const [newStartDate, setNewStartDate] = useState(
    currentDestination[0].newDestination.startDate
  );
  const [newEndDate, setNewEndDate] = useState(
    currentDestination[0].newDestination.endDate
  );
  const [newLocation, setNewLocation] = useState<GeoJsonType>({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates:
        currentDestination[0].newDestination.location.geometry.coordinates,
    },
    properties: {
      name: currentDestination[0].newDestination.location.properties.name,
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
        defaultCoordinates={
          currentDestination[0].newDestination.location.geometry.coordinates
        }
        defaultLocation={
          currentDestination[0].newDestination.location.properties.name
        }
        displayArea={'#destination'}
        onChange={(event) => setNewLocation(event)}
      />
    </>
  );
}
