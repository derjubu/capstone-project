import styled from 'styled-components';

const GeocoderArea = styled.div`
  width: calc(100% - 24px);

  & .mapboxgl-ctrl-geocoder {
    box-shadow: none;
    display: block;
    border: 3px solid var(--color-background-primary);
    border-radius: 5px;
    margin-top: 8px;
    min-height: 48px;
    max-width: 100%;
    font-size: 1rem;
    font-weight: bold;
  }

  @media screen and (min-width: 640px) {
    & .mapboxgl-ctrl-geocoder {
      max-width: 100%;
      width: 100%;
    }
  }
`;

export default GeocoderArea;
