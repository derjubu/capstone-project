import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Map(): JSX.Element {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZGVyanVidSIsImEiOiJja3dkY2hlcDMwdDVuMnBuMjkzdHk3anZpIn0.W6RooR3VQzSd39X1I4A3Lg';

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZGVyanVidSIsImEiOiJja3dkY2hlcDMwdDVuMnBuMjkzdHk3anZpIn0.W6RooR3VQzSd39X1I4A3Lg',
  });

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Map>
  );
}
