import type { ObjectId } from 'mongodb';
import React from 'react';
import styled from 'styled-components';
import CardTitle from '../CardTitle/CardTitle';
import DefaultButton from '../DefaultButton/DefaultButton';

type DestinationCardProps = {
  location: string;
  startDate: string;
  endDate: string;
  mongoID: ObjectId;
  buttonFunctionDelete: (mongoID: ObjectId) => void;
  buttonFunctionUpdate: (mongoID: ObjectId) => void;
};

export default function OverviewCard({
  location,
  startDate,
  endDate,
  mongoID,
  buttonFunctionDelete,
  buttonFunctionUpdate,
}: DestinationCardProps): JSX.Element {
  return (
    <Card data-mongoid={mongoID}>
      <CardTitle>{location}</CardTitle>
      <TripStart>{startDate}</TripStart>
      <TripEnd>{endDate}</TripEnd>
      <DefaultButton onClick={() => buttonFunctionDelete(mongoID)}>
        Delete
      </DefaultButton>
      <DefaultButton onClick={() => buttonFunctionUpdate(mongoID)}>
        Update
      </DefaultButton>
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

const TripStart = styled.span`
  grid-column: 1 / span 2;
  justify-self: end;
`;
const TripEnd = styled.span`
  grid-column: 5 / span 2;
  justify-self: start;
`;
