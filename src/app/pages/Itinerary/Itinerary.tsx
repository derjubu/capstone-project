import React from 'react';
import DestinationCard from '../../components/DestinationCard/DestinationCard';

export default function Itinerary(): JSX.Element {
  const Itinerary = JSON.parse(window.localStorage.getItem('itinerary') || '');
  return (
    <>
      <span>Hello</span>
      {Itinerary.map((stop) => (
        <DestinationCard
          Destination={stop}
          key={`${stop.location}-${Itinerary.indexOf(stop)}`}
        />
      ))}
    </>
  );
}
