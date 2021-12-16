import React from 'react';
import ItineraryMap from '../../components/ItineraryMap/ItineraryMap';
import type { LngLatLike } from 'mapbox-gl';
import LocationMap from '../../components/LocationMap/LocationMap';
import useFetch from '../../hooks/useFetch';
import OverviewCard from '../../components/OverviewCard/OverviewCard';
import type { ObjectId } from 'bson';
import { useNavigate } from 'react-router';
import ButtonNavigate from '../../components/ButtonNavigate/ButtonNavigate';

export default function Itinerary(): JSX.Element {
  const locations = useFetch<any[]>('/api/locations/');
  const locationsCoordinates: LngLatLike[] = [];
  const navigate = useNavigate();

  {
    locations?.map((city: any) =>
      locationsCoordinates.push(
        city.newDestination.location.geometry.coordinates as LngLatLike
      )
    );
  }

  async function deleteDestination(id: ObjectId) {
    const response = await fetch(`api/location/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      console.log('Destination added to DB!');
    } else {
      console.log('An error occured =(');
    }
    window.location.reload();
  }

  function updateDestination(id: ObjectId) {
    const findDestination = locations?.find((element) => element._id === id);
    const destinationData: any = [
      {
        newDestination: {
          endDate: findDestination.newDestination.endDate as string,
          startDate: findDestination.newDestination.startDate as string,
          location: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates:
                findDestination.newDestination.location.geometry.coordinates,
            },
            properties: {
              name: findDestination.newDestination.location.properties.name,
            },
          },
        },
      },
    ];
    window.localStorage.setItem('destination', JSON.stringify(destinationData));
    window.localStorage.setItem('UpdateId', JSON.stringify(id));
    navigate('/updateDestination');
  }

  if (locations === undefined) {
    return (
      <>
        <h1>Travelbuddy</h1>
        <p>Please wait a second</p>
      </>
    );
  }

  if (locations?.length === 0) {
    return (
      <>
        <p>Please enter a location</p>
        <ButtonNavigate to="/addDestination">Add Destination</ButtonNavigate>
      </>
    );
  } else if (locations?.length === 1) {
    return (
      <>
        <p>Please enter a location</p>
        {locations.map((stop: any) => (
          <OverviewCard
            key={`${
              stop.newDestination.location.properties.name
            }-${locations.indexOf(stop)}`}
            location={stop.newDestination.location.properties.name}
            startDate={stop.newDestination.startDate as string}
            endDate={stop.newDestination.endDate as string}
            mongoID={stop._id}
            buttonFunctionDelete={() => deleteDestination(stop._id)}
            buttonFunctionUpdate={() => updateDestination(stop._id)}
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
        <ButtonNavigate to="/addDestination">Add Destination</ButtonNavigate>
      </>
    );
  } else if (locations === null) {
    return (
      <p>
        Ooops, something went wrong. Apparently the database did not respond
      </p>
    );
  }

  {
    return (
      <>
        <p>Please enter a location</p>
        {locations?.map((stop: any) => (
          <OverviewCard
            key={`${
              stop.newDestination.location.properties.name
            }-${locations.indexOf(stop)}`}
            location={stop.newDestination.location.properties.name}
            startDate={stop.newDestination.startDate as string}
            endDate={stop.newDestination.endDate as string}
            mongoID={stop._id}
            buttonFunctionDelete={() => deleteDestination(stop._id)}
            buttonFunctionUpdate={() => updateDestination(stop._id)}
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
        }
        <ButtonNavigate to="/addDestination">Add Destination</ButtonNavigate>
      </>
    );
  }
}
