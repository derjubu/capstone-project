import React from 'react';
import MapWithMarker from '../../components/LocationMap/MapwithMarker';

export default function MapView(): JSX.Element {
  return (
    <>
      <div id="geocoderArea"></div>
      <MapWithMarker displayArea={'#geocoderArea'} />
    </>
  );
}
