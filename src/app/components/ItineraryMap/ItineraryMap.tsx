import React, { useRef, useEffect } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import type { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';

type LocationMapProps = {
  longitude: number;
  latitude: number;
  locations: LngLatLike[];
};

export default function LocationMap({
  longitude,
  latitude,
  locations,
}: LocationMapProps): JSX.Element {
  if (typeof import.meta.env.VITE_MAPBOX_ACCESS_KEY === 'string') {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_KEY;
  } else {
    throw new Error('no KEY provided');
  }

  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<null | Map>(null);
  const zoom = 5;

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom,
    });
    {
      locations.map((coordinates: LngLatLike) =>
        new mapboxgl.Marker().setLngLat(coordinates).addTo(map.current)
      );
    }
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
