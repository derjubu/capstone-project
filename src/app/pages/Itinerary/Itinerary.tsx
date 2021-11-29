import React from 'react';
import { useNavigate } from 'react-router';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import type { DestinationType } from '../../utils/DestinationType';
import NavigationButton from '../../components/NavigationButton/NavigationButton';

export default function Itinerary(): JSX.Element {
  const Itinerary = JSON.parse(
    window.localStorage.getItem('itinerary') || '[]'
  );

  const navigate = useNavigate();

  function addDestination() {
    navigate('/addDestination');
  }

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
      <NavigationButton onClick={addDestination} children="Add Destination" />
    </>
  );
}
