import React from 'react';
import DefaultButton from '../../components/DefaultButton/DefaultButton';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import type { DestinationType } from '../../utils/DestinationType';

export default function DestinationDetailView(): JSX.Element {
  const currentDestination: DestinationType = {
    location: window.localStorage.location,
    startDate: window.localStorage.startDate,
    endDate: window.localStorage.endDate,
  };

  function goToItinerary() {
    const oldItinerary = JSON.parse(
      window.localStorage.getItem('itinerary') || '[]'
    );
    const newItinerary = [...oldItinerary, currentDestination];
    localStorage.setItem('itinerary', JSON.stringify(newItinerary));
    console.log(window.localStorage.getItem('itinerary'));
  }

  return (
    <>
      <DestinationCard
        Destination={{
          location: currentDestination.location.replaceAll('"', ''),
          startDate: currentDestination.startDate?.replaceAll('"', ''),
          endDate: currentDestination.endDate?.replaceAll('"', ''),
        }}
      />
      <DefaultButton to="/" onClick={goToItinerary}>
        Go on
      </DefaultButton>
    </>
  );
}
