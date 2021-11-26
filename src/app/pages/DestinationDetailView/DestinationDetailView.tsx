import { useState } from 'react';
import { DestinationType } from '../../utils/DestinationType';


export default function DestinationDetailView(): JSX.Element {
  const [currentDestination, setCurrentDestination] =
    useState<DestinationType>({window.localStorage.location}, startDate: window.localStorage.startDate, endDate: window.localStorage.endDate});

  function addToDestinations() {
    console.log(currentDestination);
  }

  return (
    <>
      <DestinationCard
        location={window.localStorage.location}
        startTrip={window.localStorage.startDate}
        endTrip={window.localStorage.endDate}
      />
      <Button onClick={addToDestinations}>Go on</Button>
    </>
  );
}
