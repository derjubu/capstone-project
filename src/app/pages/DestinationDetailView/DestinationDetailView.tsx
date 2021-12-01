import React from 'react';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import type { DestinationType } from '../../utils/DestinationType';

export default function DestinationDetailView(): JSX.Element {
  const currentDestination: DestinationType = JSON.parse(
    window.localStorage.getItem('destination') || '[]'
  );

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

  function goToItinerary() {
    /*  const oldItinerary = JSON.parse(
      window.localStorage.getItem('itinerary') || '[]'
    );
    const newItinerary = [...oldItinerary, currentDestination];
    localStorage.setItem('itinerary', JSON.stringify(newItinerary)); */
    console.log(currentDestination);
  }

  return (
    <>
      {
        <DestinationCard
          location={currentLocation}
          startDate={startDate}
          endDate={endDate}
        />
      }
      <NavigationButton to="" onClick={goToItinerary}>
        Go on
      </NavigationButton>
    </>
  );
}
