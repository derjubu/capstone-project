import React from 'react';
import DestinationCard from '../../components/DestinationCard/DestinationCard';

type DestinationDetailViewProps = {
  activities: string[];
  location: string;
  startTrip: string;
  endTrip: string;
};

export default function DestinationDetailView({
  activities,
  location,
  startTrip,
  endTrip,
}: DestinationDetailViewProps): JSX.Element {
  return (
    <DestinationCard
      activities={activities}
      location={location}
      startTrip={startTrip}
      endTrip={endTrip}
    />
  );
}
