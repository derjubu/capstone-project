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

function onSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  handleSubmit(locationName, locationCountry);
  console.log('Submitted');
}

const locationName = 'Berlin';
const locationCountry = 'Germany';

export default function DbTest(): JSX.Element {
  const locations = useFetch('/api/locations');
  console.log(locations);
  console.log(typeof locations);

  return (
    <>
      Here goes stuff
      <form id="test" onSubmit={onSubmit}>
        {locationName}; {locationCountry}
        <button>Add Data</button>
      </form>
    </>
  );
}
