import React, { useRef, useEffect } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import type { Map } from 'mapbox-gl';
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
  const zoom = 5;
  const marker = new mapboxgl.Marker();
  const Locations: LngLatLike[] = [
    [7.43861, 46.95083],
    [8.51667, 52.01667],
  ];

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom,
    });
    new mapboxgl.Marker()
      .setLngLat(Locations[0] as LngLatLike)
      .addTo(map.current);
    new mapboxgl.Marker()
      .setLngLat(Locations[1] as LngLatLike)
      .addTo(map.current);
  }, []);

  /* useEffect(() => {
    if (map.current) {
      marker.setLngLat(Locations[0]).addTo(map.current);
      marker2.setLngLat(Locations[1]).addTo(map.current);
    }
  }, []); */

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
