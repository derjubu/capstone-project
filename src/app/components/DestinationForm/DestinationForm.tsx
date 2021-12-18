import styled from 'styled-components';
import DefaultButton from '../ButtonDefault/ButtonDefault';

const DestinationForm = styled.form`
  background: var(--background-color-tertiary);
  padding-bottom: 5px;
  list-style: none;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  border: #fff solid 1px;
  border-radius: 5px;

  ${DefaultButton} {
    margin: 10px;
  }
`;
export default DestinationForm;
