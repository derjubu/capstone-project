import styled from 'styled-components';
import DefaultButton from '../DefaultButton/DefaultButton';

const DestinationForm = styled.form`
  background: var(--background-color-tertiary);
  padding-bottom: 5px;
  list-style: none;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  border: #fff solid 1px;
  border-radius: 5px;
  justify-items: center;
  text-align: center;

  ${DefaultButton} {
    margin: 10px;
    grid-column: 3/5;
  }
`;
export default DestinationForm;
