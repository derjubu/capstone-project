import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import type { Map, LngLatLike } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';

type LocationMapProps = {
  locations: LngLatLike[];
};

if (typeof import.meta.env.VITE_MAPBOX_ACCESS_KEY === 'string') {
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_KEY;
} else {
  throw new Error('no KEY provided');
}

export default function LocationMap({
  locations,
}: LocationMapProps): JSX.Element {
  const line = turf.lineString;

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom,
    });

    locations.map((coordinates: LngLatLike) =>
      new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map.current as mapboxgl.Map)
    );
  }, []);

  return (
    <div>
      <MapContainer ref={mapContainer} />
    </div>
  );
}
const MapContainer = styled.div`
  height: 400px;
  margin: 2px;
`;
