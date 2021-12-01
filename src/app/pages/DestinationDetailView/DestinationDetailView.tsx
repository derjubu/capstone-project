import React from 'react';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
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
          location: currentDestination.location,
          startDate: currentDestination.startDate,
          endDate: currentDestination.endDate,
        }}
      />
      <NavigationButton to="/" onClick={goToItinerary}>
        Go on
      </NavigationButton>
    </>
  );
}
