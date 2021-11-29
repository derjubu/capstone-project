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
      <span>Hello</span>
      {Itinerary.map((stop: DestinationType) => (
        <DestinationCard
          key={`${stop.location}-${Itinerary.indexOf(stop)}`}
          Destination={{
            location: stop.location.replaceAll('"', ''),
            startDate: stop.startDate?.replaceAll('"', ''),
            endDate: stop.endDate?.replaceAll('"', ''),
          }}
        />
      ))}
      <NavigationButton to="/addDestination">Add Destination</NavigationButton>
    </>
  );
}
