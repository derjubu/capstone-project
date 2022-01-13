import type { GeoJsonType } from './GeoJsonType';

export type DestinationType = {
  location: GeoJsonType;
  startDate: string;
  endDate: string;
};

export type UpdateDestinationType = {
  newDestination: DestinationType;
};
