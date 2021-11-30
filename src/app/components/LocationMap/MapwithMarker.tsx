import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import type { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export default function MapWithMarker(): JSX.Element {
  if (typeof import.meta.env.VITE_MAPBOX_ACCESS_KEY === 'string') {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_KEY;
  } else {
    throw new Error('no KEY provided');
  }

  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<null | Map>(null);
  const [longitude, setLongitude] = useState<number>(10.0125);
  const [latitude, setLatitude] = useState<number>(53.5469);
  const [zoom, setZoom] = useState(9);
  const marker = new mapboxgl.Marker();

  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: false,
  });

  geocoder.on('result', (result) => {
    marker.remove;
    map.current
      ? marker.setLngLat(result.result.center).addTo(map.current)
      : null;
  });

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom,
    });

    geocoder.addTo(map.current);
  }, []);

  useEffect(() => {
    map.current?.on('move', () => {
      if (map.current) {
        setLongitude(map.current.getCenter().lng);
        setLatitude(map.current.getCenter().lat);
        setZoom(map.current.getZoom());
      }
    });
  }, []);

  return (
    <div>
      <MapLegend id="maplegend"></MapLegend>
      <MapContainer ref={mapContainer} />
    </div>
  );
}
const MapContainer = styled.div`
  height: 400px;
  margin: 2px;
`;

const MapLegend = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 12px;
  background-color: aqua;
  z-index: 1;
`;
