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
      <span>Where do you want to go?</span>
      <InputData>{location}</InputData>
      <span>Where do you want to arrive?</span>
      <InputData>{startDate}</InputData>
      <span>Where do you want to leave?</span>
      <InputData>{endDate}</InputData>
    </Card>
  );
}

const Card = styled.article`
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  align-items: flex-start;
  border-radius: 5px;
`;
const InputData = styled.span`
  color: var(--color-secondary);
  margin-bottom: 8px;
  font-size: 1.2rem;
  font-weight: bold;
`;
