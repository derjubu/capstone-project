import styled from 'styled-components';
import DefaultButton from '../ButtonDefault/ButtonDefault';

const CheckInputArea = styled.form`
  background: var(--background-color-tertiary);
  padding-bottom: 5px;
  list-style: none;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  border: #fff solid 1px;
  border-radius: 5px;
  width: 100%;
  ${DefaultButton} {
    margin: 10px 0;
  }
`;
export default CheckInputArea;
