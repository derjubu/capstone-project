import styled from 'styled-components';
import DefaultButton, { ButtonNavigate } from '../ButtonDefault/ButtonDefault';

const DestinationForm = styled.form`
  background: var(--color-background-secondary);
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
    margin: 10px 0;
  }
`;
export default DestinationForm;
