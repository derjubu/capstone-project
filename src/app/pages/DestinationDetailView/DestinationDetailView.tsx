import React from 'react';

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
    <div>
      <h1>{location}</h1>
      <span>{startTrip}</span>
      <span>{endTrip}</span>
      <ul>
        {activities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
