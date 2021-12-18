import React from 'react';
import styled from 'styled-components';
import CardTitle from '../CardTitle/CardTitle';

type DestinationCardProps = {
  location: string;
  startDate: string;
  endDate: string;
};

export default function DestinationCard({
  location,
  startDate,
  endDate,
}: DestinationCardProps): JSX.Element {
  return (
    <Card>
      <CardTitle>{location}</CardTitle>
      <TripStart>{startDate}</TripStart>
      <TripEnd>{endDate}</TripEnd>
    </Card>
  );
}

const Card = styled.article`
  display: grid;
  column-gap: 5px;
  border: black solid 1px;
  border-radius: 5px;
`;

const TripStart = styled.span`
  grid-column: 1 / span 2;
  justify-self: end;
`;
const TripEnd = styled.span`
  grid-column: 5 / span 2;
  justify-self: start;
`;
