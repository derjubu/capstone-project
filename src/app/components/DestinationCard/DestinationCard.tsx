import React from 'react';
import type { DestinationType } from '../../utils/DestinationType';
import styled from 'styled-components';

type DestinationCardProps = {
  Destination: DestinationType;
};

export default function DestinationCard({
  Destination,
}: DestinationCardProps): JSX.Element {
  return (
    <Card>
      <TitleLocation>{Destination.location}</TitleLocation>
      <TripStart>{Destination.startDate}</TripStart>
      <TripEnd>{Destination.endDate}</TripEnd>
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

const TripStart = styled.span`
  grid-column: 1 / span 2;
  justify-self: end;
`;
const TripEnd = styled.span`
  grid-column: 5 / span 2;
  justify-self: start;
`;
