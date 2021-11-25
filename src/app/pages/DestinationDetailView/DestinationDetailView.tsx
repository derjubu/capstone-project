import React from 'react';
import DestinationCard from '../../components/DestinationCard/DestinationCard';

export default function DestinationDetailView(): JSX.Element {
  return (
    <DestinationCard
      activities={window.localStorage.activities}
      location={window.localStorage.location}
      startTrip={window.localStorage.startDate}
      endTrip={window.localStorage.endDate}
    />
  );
}
