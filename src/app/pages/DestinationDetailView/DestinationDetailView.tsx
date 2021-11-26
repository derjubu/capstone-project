import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Button/Button';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import useLocalStorage from '../../hooks/useLocalStorage';
import type { DestinationType } from '../../utils/DestinationType';

export default function DestinationDetailView(): JSX.Element {
  const currentDestination: DestinationType = {
    location: window.localStorage.location.replaceAll('"', ''),
    startDate: window.localStorage.startDate,
    endDate: window.localStorage.endDate,
  };

  const navigate = useNavigate();
  const [newItinerary, setNewItinerary] = useLocalStorage(
    'newItinerary',
    currentDestination
  );

  function goToItinerary() {
    setNewItinerary(currentDestination);
    console.log(newItinerary);
    window.localStorage.location = '';
    window.localStorage.startDate = '';
    window.localStorage.endDate = '';
    console.log(window.localStorage.newItinerary);
    navigate('/');
  }

  return (
    <>
      <DestinationCard Destination={currentDestination} />
      <Button onClick={goToItinerary}>Go on</Button>
    </>
  );
}
