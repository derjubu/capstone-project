import React from 'react';
import useFetch from '../../hooks/useFetch';

async function handleSubmit(locationName: string, locationCountry: string) {
  console.log('click');
  const response = await fetch('/api/location/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ locationName, locationCountry }),
  });
  if (response.status === 200) {
    console.log('Done!');
  } else {
    console.log('Fehler');
  }
}

async function deleteEntry(locationName: string) {
  console.log('click delete');
  const response = await fetch('/api/delete/', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ locationName }),
  });
  console.log(response);
  if (response.status === 200) {
    console.log('Done!');
  } else {
    console.log('Fehler');
  }
}

function onSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  handleSubmit(locationName, locationCountry);
  console.log('Submitted');
}

function onDelete(locationName: string) {
  deleteEntry(locationName);
  console.log('Submitted');
}

async function onUpdate(locationId: any, newLocationName: string) {
  console.log('click');
  const response = await fetch(`/api/locationUpdate/${locationId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ newLocationName }),
  });
  if (response.status === 200) {
    console.log('Done!');
  } else {
    console.log('Fehler');
  }
}

const locationName = 'Berlin';
const locationCountry = 'Germany';

export default function DbTest(): JSX.Element {
  const locations = useFetch<any[]>('/api/alllocations');
  const bielefeld = 'Bielefeld';

  return (
    <>
      Here goes stuff
      <form id="test" onSubmit={onSubmit}>
        {locationName}; {locationCountry}
        <button>Add Data</button>
      </form>
      {locations &&
        locations.map((location) => (
          <p key={location + locations.indexOf(location)}>
            {location.locationName}, {location.locationCountry}, {location._id}
            <button onClick={() => onDelete(location.locationName)}>
              Delete
            </button>
            <button onClick={() => onUpdate(location._id, bielefeld)}>
              Update
            </button>
          </p>
        ))}
    </>
  );
}
