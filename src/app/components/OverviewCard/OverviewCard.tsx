import type { ObjectId } from 'mongodb';
import React from 'react';
import styled from 'styled-components';
import CardTitle from '../CardTitle/CardTitle';
import ButtonSimple from '../ButtonSimple/ButtonSimple';

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
      <ButtonSimple onClick={() => buttonFunctionDelete(mongoID)}>
        Delete
      </ButtonSimple>
      <ButtonSimple onClick={() => buttonFunctionUpdate(mongoID)}>
        Update
      </ButtonSimple>
    </Card>
  );
}

const Card = styled.article`
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  max-width: 640px;
  box-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.035),
    4px 4px 8px rgba(0, 0, 0, 0.07);
`;

const TripDate = styled.span`
  display: block;
  justify-self: end;
  text-align: center;
  margin: 4px;
`;
