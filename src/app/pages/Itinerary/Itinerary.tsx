import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Button/Button';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import { DestinationType } from '../../utils/DestinationType';

export default function Itinerary(): JSX.Element {
  const Itinerary = JSON.parse(window.localStorage.getItem('itinerary') || '');

  const navigate = useNavigate();

  function addDestination() {
    navigate('/addDestination');
  }

  return (
    <>
      <span>Hello</span>
      {Itinerary.map((stop: DestinationType) => (
        <DestinationCard
          Destination={stop}
          key={`${stop.location}-${Itinerary.indexOf(stop)}`}
        />
      ))}
      <Button onClick={addDestination}>Add Destination</Button>
    </>
  );
}
