import React from 'react';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import type { DestinationType } from '../../utils/DestinationType';
import NavigationButton from '../../components/NavigationButton/NavigationButton';

export default function Itinerary(): JSX.Element {
  const Itinerary = JSON.parse(
    window.localStorage.getItem('itinerary') || '[]'
  );
  return (
    <>
      {Itinerary.map((stop: DestinationType) => (
        <DestinationCard
          key={`${'Hello'}-${Itinerary.indexOf(stop)}`}
          location={stop.location.properties.name}
          startDate={stop.startDate as string}
          endDate={stop.endDate as string}
        />
      ))}

      <NavigationButton to="/addDestination">Add Destination</NavigationButton>
    </>
  );
}

/* {
  const currentLocation = JSON.stringify(
    stop.location.properties.name
  ).replaceAll('"', '');
  const startDate = JSON.stringify(stop.startDate).replaceAll('"', '');
  const endDate = JSON.stringify(stop.endDate).replaceAll('"', '');
  console.log(currentLocation); */
