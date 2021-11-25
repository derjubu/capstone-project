import React from 'react';
import DestinationCard from '../../components/DestinationCard/DestinationCard';

export default function DestinationDetailView(): JSX.Element {
  return (
    <DestinationCard
      activities={activities}
      location={location}
      startTrip={startTrip}
      endTrip={endTrip}
    />
  );
}
