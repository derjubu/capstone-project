import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import type { Map, LngLatLike, LngLatBoundsLike } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';
import * as turf from '@turf/turf';

type LocationMapProps = {
  longitude: number;
  latitude: number;
  locations: LngLatLike[];
};

if (typeof import.meta.env.VITE_MAPBOX_ACCESS_KEY === 'string') {
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_KEY;
} else {
  throw new Error('no KEY provided');
}

export default function LocationMap({
  locations,
  longitude,
  latitude,
}: LocationMapProps): JSX.Element {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<null | Map>(null);

  const line = turf.lineString(locations as turf.helpers.Position[]);
  const bbox = turf.bbox(line) as LngLatBoundsLike;

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 6,
    });

    console.log(locations);
    map.current.fitBounds(bbox, { padding: 30 });

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
