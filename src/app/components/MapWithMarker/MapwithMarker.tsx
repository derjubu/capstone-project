import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import type { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import type { GeoJsonType } from '../../utils/GeoJsonType';

type MapWithMarkerProps = {
  displayArea: string;
  onChange: (event: any) => void;
};

if (typeof import.meta.env.VITE_MAPBOX_ACCESS_KEY === 'string') {
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_KEY;
} else {
  throw new Error('no KEY provided');
}

export default function MapWithMarker({
  displayArea,
  onChange,
}: MapWithMarkerProps): JSX.Element {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<null | Map>(null);
  const [longitude] = useState<number>(10.0125);
  const [latitude] = useState<number>(53.5469);
  const [zoom] = useState(9);
  const marker = new mapboxgl.Marker();
  const locationGeoJson: GeoJsonType = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [0, 0],
    },
    properties: {
      name: '',
    },
  };

  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: false,
  });

  useEffect(() => {
    geocoder.on('result', (result) => {
      if (map.current) {
        const markedLocation = result.result.center;
        marker.setLngLat(markedLocation).addTo(map.current);
        map.current.flyTo({ center: markedLocation });
        const currentLocationGeoJson: GeoJsonType = {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: markedLocation,
          },
          properties: { name: result.result.place_name as string },
        };
        locationGeoJson.properties.name =
          currentLocationGeoJson.properties.name;
        locationGeoJson.geometry.coordinates =
          currentLocationGeoJson.geometry.coordinates;
        onChange(locationGeoJson);
      } else return;
    });
  }, []);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom,
    });

    geocoder.addTo(displayArea);
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
