import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import type { Map, LngLatLike } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';

type LocationMapProps = {
  longitude: number;
  latitude: number;
};

export default function LocationMap({
  longitude,
  latitude,
}: LocationMapProps): JSX.Element {
  if (typeof import.meta.env.VITE_MAPBOX_ACCESS_KEY === 'string') {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_KEY;
  } else {
    throw new Error('no KEY provided');
  }

  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<null | Map>(null);
  const zoom = 9;
  const marker = new mapboxgl.Marker();

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom,
      interactive: false,
    });
    const markedLocation = [longitude, latitude] as LngLatLike;
    marker.setLngLat(markedLocation).addTo(map.current);
  }, []);

  return (
    <div>
      <MapContainer ref={mapContainer} />
    </div>
  );
}
const MapContainer = styled.div`
  height: 250px;
  border: 1px solid var(--color-background-primary);
  border-radius: 4px;
`;
