import React from 'react';
import ItineraryMap from '../../components/ItineraryMap/ItineraryMap';
import type { LngLatLike } from 'mapbox-gl';
import LocationMap from '../../components/LocationMap/LocationMap';
import useFetch from '../../hooks/useFetch';
import OverviewCard from '../../components/OverviewCard/OverviewCard';
import type { ObjectId } from 'bson';
import { useNavigate } from 'react-router';
import AppTitle from '../../components/AppTitle/AppTitle';
import AppSubTitle from '../../components/AppSubTitle/AppSubTitle';
import ContentArea from '../../components/ContentArea/ContentArea';
import { ButtonNavigate } from '../../components/ButtonDefault/ButtonDefault';
import type { DbDestinationType } from '../../utils/DbDestinationArray';
import type { UpdateDestinationType } from '../../utils/DestinationType';

export default function Itinerary(): JSX.Element {
  const locations = useFetch<DbDestinationType[]>('/api/locations/');
  const locationsCoordinates: LngLatLike[] = [];
  const navigate = useNavigate();

  {
    locations?.map((city: UpdateDestinationType) =>
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
    const destinationData: UpdateDestinationType[] = [
      {
        newDestination: {
          endDate: findDestination?.newDestination.endDate as string,
          startDate: findDestination?.newDestination.startDate as string,
          location: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: findDestination?.newDestination.location.geometry
                .coordinates as number[],
            },
            properties: {
              name: findDestination?.newDestination.location.properties.name,
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
        <AppTitle>Travelbuddy</AppTitle>
        <p>Please wait a second</p>
      </>
    );
  }

  if (locations?.length === 0) {
    return (
      <>
        <AppTitle>Travelbuddy</AppTitle>
        <AppSubTitle>Your Itinerary</AppSubTitle>
        <ButtonNavigate link="/addDestination">Add Destination</ButtonNavigate>
      </>
    );
  } else if (locations?.length === 1) {
    return (
      <>
        <AppTitle>Travelbuddy</AppTitle>

        <AppSubTitle>Your Itinerary</AppSubTitle>

        <LocationMap
          longitude={
            locations[0].newDestination.location.geometry.coordinates[0]
          }
          latitude={
            locations[0].newDestination.location.geometry.coordinates[1]
          }
        />
        <ContentArea>
          {locations.map((stop: DbDestinationType) => (
            <OverviewCard
              key={`${
                stop.newDestination.location.properties.name
              }-${locations.indexOf(stop)}`}
              location={stop.newDestination.location.properties.name as string}
              startDate={stop.newDestination.startDate as string}
              endDate={stop.newDestination.endDate as string}
              mongoID={stop._id}
              buttonFunctionDelete={() => deleteDestination(stop._id)}
              buttonFunctionUpdate={() => updateDestination(stop._id)}
            />
          ))}
          <ButtonNavigate link="/addDestination">
            Add Destination
          </ButtonNavigate>
        </ContentArea>
      </>
    );
  } else if (locations === null) {
    return (
      <>
        <AppTitle>Travelbuddy</AppTitle>
        <p>
          Ooops, something went wrong. Apparently the database did not respond
        </p>
      </>
    );
  }

  {
    return (
      <>
        <AppTitle>Travelbuddy</AppTitle>
        <AppSubTitle>Your Itinerary</AppSubTitle>
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
        <ContentArea>
          {locations?.map((stop: DbDestinationType) => (
            <OverviewCard
              key={`${
                stop.newDestination.location.properties.name
              }-${locations.indexOf(stop)}`}
              location={stop.newDestination.location.properties.name as string}
              startDate={stop.newDestination.startDate as string}
              endDate={stop.newDestination.endDate as string}
              mongoID={stop._id}
              buttonFunctionDelete={() => deleteDestination(stop._id)}
              buttonFunctionUpdate={() => updateDestination(stop._id)}
            />
          ))}

          <ButtonNavigate link="/addDestination">
            Add Destination
          </ButtonNavigate>
        </ContentArea>
      </>
    );
  }
}
