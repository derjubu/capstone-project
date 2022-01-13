import type { ObjectId } from 'mongodb';
import type { DestinationType } from './DestinationType';

export type DbDestinationType = {
  _id: ObjectId;
  newDestination: DestinationType;
};
