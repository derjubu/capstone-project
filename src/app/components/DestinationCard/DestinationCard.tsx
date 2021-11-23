import React from 'react';
import styled from 'styled-components';
import Tasklist from '../Tasklist/Tasklist';

type DestinationCardProps = {
  activities: string[];
  location: string;
  startTrip: string;
  endTrip: string;
};

export default function DestinationCard({
  activities,

  location,
  startTrip,
  endTrip,
}: DestinationCardProps): JSX.Element {
  return (
    <Card>
      <TitleLocation>{location}</TitleLocation>
      <TripStart>{startTrip}</TripStart>
      <TripEnd>{endTrip}</TripEnd>
      <TitleActivities>What I want to do</TitleActivities>
      <ActivitiesList>
        {activities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ActivitiesList>
    </Card>
  );
}

const Card = styled.article`
  max-width: 1400;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 5px;
  border: black solid 1px;
  border-radius: 5px;
`;

const TitleLocation = styled.h1`
  text-align: center;
  justify-self: center;
  grid-column: 3/5;
`;

const TitleActivities = styled.h2`
  text-align: center;
  justify-self: center;
  grid-column: 3/5;
`;

const TripStart = styled.span`
  grid-column: 1 / span 2;
  justify-self: end;
`;
const TripEnd = styled.span`
  grid-column: 5 / span 2;
  justify-self: start;
`;

const ActivitiesList = styled.ul`
  list-style: none;
  grid-column: 3/5;
`;
