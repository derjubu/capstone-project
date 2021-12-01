import type { LngLatLike } from 'mapbox-gl';

export type GeoJsonType = {
  type: 'Feature';
  geometry: {
    type: 'Point';
    coordinates: number[];
  };
  properties: {
    name: string;
  };
};
