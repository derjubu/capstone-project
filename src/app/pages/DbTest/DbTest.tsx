import React from 'react';

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

const locationName = 'Berlin';
const locationCountry = 'Germany';

export default function DbTest(): JSX.Element {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmit(locationName, locationCountry);
    console.log('Submitted');
  }

  return (
    <>
      Here goes stuff
      <form id="test" onSubmit={onSubmit}>
        {locationName}; {locationCountry}
        <button>Click</button>
      </form>
    </>
  );
}
