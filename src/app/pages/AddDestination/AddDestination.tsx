import React, { useState } from 'react';
import CardTitle from '../../components/CardTitle/CardTitle';
import DestinationForm from '../../components/DestinationForm/DestinationForm';
import InputField from '../../components/InputField/InputField';
import InputLabel from '../../components/InputLabel/InputLabel';
import { useNavigate } from 'react-router';
import type { DestinationType } from '../../utils/DestinationType';
import type { GeoJsonType } from '../../utils/GeoJsonType';
import MapWithMarker from '../../components/MapWithMarker/MapwithMarker';
import ButtonDefault, {
  ButtonNavigateSecondary,
} from '../../components/ButtonDefault/ButtonDefault';
import ButtonArea from '../../components/ButtonArea/ButtonArea';
import GeocoderArea from '../../components/GeocoderArea/GeocoderArea';

export default function AddDestination(): JSX.Element {
  const [newStartDate, setNewStartDate] = useState('');
  const [newEndDate, setNewEndDate] = useState('');
  const [newLocation, setNewLocation] = useState<GeoJsonType>({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [0, 0],
    },
    properties: {
      name: '',
    },
  });

  const navigate = useNavigate();

  function goToDetailpage(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const newDestination: DestinationType = {
      location: newLocation,
      startDate: newStartDate,
      endDate: newEndDate,
    };
    window.localStorage.destination = JSON.stringify(newDestination);
    navigate('/DestinationDetailView');
  }

  return (
    <>
      <CardTitle>Add a new destination</CardTitle>
      <DestinationForm onSubmit={goToDetailpage}>
        <InputLabel htmlFor="destination">
          Where do you want to go?
          <GeocoderArea id="destination" />
        </InputLabel>

        <InputLabel htmlFor="start-trip">
          When do you arrive?
          <InputField
            required
            type="date"
            id="start-trip"
            value={newStartDate}
            onChange={(event) => setNewStartDate(event.target.value)}
          />
        </InputLabel>
        <InputLabel htmlFor="end-trip">
          When do you leave?
          <InputField
            required
            type="date"
            id="end-trip"
            value={newEndDate}
            onChange={(event) => setNewEndDate(event.target.value)}
          />
        </InputLabel>
        <MapWithMarker
          displayArea={'#destination'}
          onChange={(event) => setNewLocation(event)}
        />
        <ButtonArea>
          <ButtonNavigateSecondary link="/">Back</ButtonNavigateSecondary>
          <ButtonDefault>Check</ButtonDefault>
        </ButtonArea>
      </DestinationForm>
    </>
  );
}
