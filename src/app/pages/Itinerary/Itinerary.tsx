import React from 'react';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import ItineraryMap from '../../components/ItineraryMap/ItineraryMap';
import type { LngLatLike } from 'mapbox-gl';
import LocationMap from '../../components/LocationMap/LocationMap';
import useFetch from '../../hooks/useFetch';

export default function Itinerary(): JSX.Element {
  const locations = useFetch<any[]>('/api/location/');

  const Itinerary = JSON.parse(
    window.localStorage.getItem('itinerary') || '[]'
  );

  const locationsCoordinates: LngLatLike[] = [];

  {
    locations?.map((city: any) =>
      locationsCoordinates.push(
        city.newDestination.location.geometry.coordinates as LngLatLike
      )
    );
  }

  if (locations === undefined) {
    return (
      <>
        <p>Please wait a second</p>
      </>
    );
  }

  if (locations?.length === 0) {
    return (
      <>
        <p>Please enter a location</p>
        <NavigationButton to="/addDestination">
          Add Destination
        </NavigationButton>
      </>
    );
  } else if (locations?.length === 1) {
    return (
      <>
        <p>Please enter a location</p>
        <NavigationButton to="/addDestination">
          Add Destination
        </NavigationButton>{' '}
        {locations.map((stop: any) => (
          <DestinationCard
            key={`${
              stop.newDestination.location.properties.name
            }-${Itinerary.indexOf(stop)}`}
            location={stop.newDestination.location.properties.name}
            startDate={stop.newDestination.startDate as string}
            endDate={stop.newDestination.endDate as string}
          />
        ))}
        <LocationMap
          longitude={
            locations[0].newDestination.location.geometry.coordinates[0]
          }
          latitude={
            locations[0].newDestination.location.geometry.coordinates[1]
          }
        />
      </>
    );
  }
  {
    return (
      <>
        <p>Please enter a location</p>
        <NavigationButton to="/addDestination">
          Add Destination
        </NavigationButton>{' '}
        {locations?.map((stop: any) => (
          <DestinationCard
            key={`${
              stop.newDestination.location.properties.name
            }-${Itinerary.indexOf(stop)}`}
            location={stop.newDestination.location.properties.name}
            startDate={stop.newDestination.startDate as string}
            endDate={stop.newDestination.endDate as string}
          />
        ))}
        {
          <ItineraryMap
            longitude={
              locations[0].newDestination.location.geometry.coordinates[0]
            }
            latitude={
              locations[0].newDestination.location.geometry.coordinates[1]
            }
            locations={locationsCoordinates}
          />
        }{' '}
      </>
    );
  }
}
