import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Button/Button';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import type { DestinationType } from '../../utils/DestinationType';

export default function DestinationDetailView(): JSX.Element {
  const currentDestination: DestinationType = {
    location: window.localStorage.location.replace(/[""]+/g, ''),
    startDate: window.localStorage.startDate,
    endDate: window.localStorage.endDate,
  };

  const navigate = useNavigate();

  function goToItinerary() {
    console.log(currentDestination);
    navigate('/');
  }

  return (
    <>
      <DestinationCard Destination={currentDestination} />
      <Button onClick={goToItinerary}>Go on</Button>
    </>
  );
}
