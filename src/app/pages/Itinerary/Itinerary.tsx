import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Button/Button';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import type { DestinationType } from '../../utils/DestinationType';

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
      <Button onClick={addDestination}>Add Destination</Button>
    </>
  );
}
