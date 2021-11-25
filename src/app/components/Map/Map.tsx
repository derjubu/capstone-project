import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import type { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';

export default function LocationMap(): JSX.Element {
  if (process.env.MAPBOX_ACCESS_KEY) {
    mapboxgl.accessToken = process.env.MAPBOX_ACCESS_KEY;
  }

  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<null | Map>(null);
  const [lng, setLng] = useState<number>(10.0125);
  const [lat, setLat] = useState<number>(53.5469);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  useEffect(() => {
    map.current?.on('move', () => {
      if (map.current) {
        setLng(map.current.getCenter().lng);
        setLat(map.current.getCenter().lat);
        setZoom(map.current.getZoom());
      }
    });
  }, []);

  return (
    <div>
      <MapLegend>
        Longitude: {lng} | Lattitude: {lat} | Zoom: {zoom}
      </MapLegend>
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
