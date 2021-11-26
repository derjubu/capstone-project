import React from 'react';
import Button from '../../components/Button/Button';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import type { DestinationType } from '../../utils/DestinationType';

export default function DestinationDetailView(): JSX.Element {
  const currentDestination: DestinationType = {
    location: window.localStorage.location.replace(/["]+/g, ''),
    startDate: window.localStorage.startDate.replace(/["]+/g, ''),
    endDate: window.localStorage.endDate.replace(/["]+/g, ''),
  };

  function addToDestinations() {
    console.log(currentDestination);
  }

  return (
    <>
      <DestinationCard Destination={currentDestination} />
      <Button onClick={addToDestinations}>Go on</Button>
    </>
  );
}
