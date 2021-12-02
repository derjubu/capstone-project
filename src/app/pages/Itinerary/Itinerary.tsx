import React from 'react';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import type { DestinationType } from '../../utils/DestinationType';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import ItineraryMap from '../../components/ItineraryMap/ItineraryMap';
import type { LngLatLike } from 'mapbox-gl';

export default function Itinerary(): JSX.Element {
  const Itinerary = JSON.parse(
    window.localStorage.getItem('itinerary') || '[]'
  );
  const locationsCoordinates: LngLatLike[] = [];

  {
    Itinerary.map((destination: DestinationType) =>
      locationsCoordinates.push(
        destination.location.geometry.coordinates as LngLatLike
      )
    );
  }

  console.log(locationsCoordinates);

  return (
    <>
      {Itinerary.map((stop: DestinationType) => (
        <DestinationCard
          key={`${'Hello'}-${Itinerary.indexOf(stop)}`}
          location={stop.location.properties.name}
          startDate={stop.startDate as string}
          endDate={stop.endDate as string}
        />
      ))}
      {
        <ItineraryMap
          longitude={Itinerary[0].location.geometry.coordinates[0]}
          latitude={Itinerary[0].location.geometry.coordinates[1]}
          locations={locationsCoordinates}
        />
      }
      <NavigationButton to="/addDestination">Add Destination</NavigationButton>
    </>
  );
}
