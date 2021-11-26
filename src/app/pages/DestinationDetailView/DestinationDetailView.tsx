import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Button/Button';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import type { DestinationType } from '../../utils/DestinationType';

export default function DestinationDetailView(): JSX.Element {
  const currentDestination: DestinationType = {
    location: window.localStorage.location,
    startDate: window.localStorage.startDate,
    endDate: window.localStorage.endDate,
  };

  const navigate = useNavigate();

  function goToItinerary() {
    const oldItinerary = JSON.parse(
      window.localStorage.getItem('itinerary') || ''
    );
    const newItinerary = [...oldItinerary, currentDestination];
    localStorage.setItem('itinerary', JSON.stringify(newItinerary));
    console.log(window.localStorage.getItem('itinerary'));
    navigate('/');
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
      <Button onClick={goToItinerary}>Go on</Button>
    </>
  );
}
