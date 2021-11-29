import styled from 'styled-components';

const DestinationForm = styled.form`
  background: var(--background-color-tertiary);
  padding-bottom: 5px;
  list-style: none;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 5px;
  border: #fff solid 1px;
  border-radius: 5px;
  justify-items: center;
  text-align: center;
`;
export default DestinationForm;
