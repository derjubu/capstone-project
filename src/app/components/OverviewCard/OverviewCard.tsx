import type { ObjectId } from 'mongodb';
import React from 'react';
import styled from 'styled-components';
import CardTitle from '../CardTitle/CardTitle';
import { ButtonDefaultSimple } from '../ButtonDefault/ButtonDefault';

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
      <TripDate>You arrive on {startDate}</TripDate>
      <TripDate>You depart on {endDate}</TripDate>
      <FlexArea>
        <ButtonDefaultSimple onClick={() => buttonFunctionDelete(mongoID)}>
          Delete
        </ButtonDefaultSimple>
        <ButtonDefaultSimple onClick={() => buttonFunctionUpdate(mongoID)}>
          Update
        </ButtonDefaultSimple>
      </FlexArea>
    </Card>
  );
}

const Card = styled.article`
  border-radius: 5px;
  width: 100%;
  max-width: 640px;
  box-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.035),
    4px 4px 8px rgba(0, 0, 0, 0.07);
  background-color: var(--color-background-secondary);
`;

const TripDate = styled.span`
  display: block;
  justify-self: end;
  text-align: center;
  margin: 4px;
`;

const FlexArea = styled.div`
  display: flex;
  gap: 4px;
`;
