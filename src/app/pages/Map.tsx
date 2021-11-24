import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import type { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';

export default function LocationMap(): JSX.Element {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZGVyanVidSIsImEiOiJja3dkY2hlcDMwdDVuMnBuMjkzdHk3anZpIn0.W6RooR3VQzSd39X1I4A3Lg';
  const mapContainer = useRef<HTMLElement | string>('');
  const map = useRef<null | Map>(null);
  const [lng, setLng] = useState<number>(10.0125);
  const [lat, setLat] = useState<number>(53.5469);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return;
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <MapLegend>
        Longitude: {lng} | Lattitude: {lat} | Zoom: {zoom}
      </MapLegend>
      <MapContainer ref={mapContainer} />;
    </div>
  );
}
const MapContainer = styled.div`
  height: 400px;
`;

const MapLegend = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 12px;
  background-color: aqua;
  z-index: 1;
`;
