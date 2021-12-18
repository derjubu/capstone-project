import React from 'react';
import ButtonNavigate from '../../components/ButtonNavigate/ButtonNavigate';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import type { DestinationType } from '../../utils/DestinationType';
import LocationMap from '../../components/LocationMap/LocationMap';
import ButtonArea from '../../components/ButtonArea/ButtonArea';
import CheckInputArea from '../../components/CheckInputArea/CheckInputArea';

export default function DestinationDetailView(): JSX.Element {
  const currentDestination: DestinationType = JSON.parse(
    window.localStorage.getItem('destination') || '[]'
  );

  async function saveDestination(newDestination: DestinationType) {
    const response = await fetch('/api/location/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newDestination }),
    });
    if (response.status === 200) {
      console.log('Destination added to DB!');
    } else {
      console.log('An error occured =(');
    }
  }

  const currentLocation = JSON.stringify(
    currentDestination.location.properties.name
  ).replaceAll('"', '');

  const startDate = JSON.stringify(currentDestination.startDate).replaceAll(
    '"',
    ''
  );
  const endDate = JSON.stringify(currentDestination.endDate).replaceAll(
    '"',
    ''
  );

  const longitude = currentDestination.location.geometry.coordinates[0];
  const latitude = currentDestination.location.geometry.coordinates[1];

  function goToItinerary() {
    const oldItinerary = JSON.parse(
      window.localStorage.getItem('itinerary') || '[]'
    );
    const newItinerary = [...oldItinerary, currentDestination];
    saveDestination(currentDestination);
    localStorage.setItem('itinerary', JSON.stringify(newItinerary));
  }

  return (
    <CheckInputArea>
      <DestinationCard
        location={currentLocation}
        startDate={startDate}
        endDate={endDate}
      />
      <LocationMap longitude={longitude} latitude={latitude} />
      <ButtonArea>
        <ButtonNavigate link="/AddDestination">Back</ButtonNavigate>
        <ButtonNavigate link="/" onClick={goToItinerary}>
          Go on
        </ButtonNavigate>
      </ButtonArea>
    </CheckInputArea>
  );
}
