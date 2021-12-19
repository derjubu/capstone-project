import styled from 'styled-components';
import DefaultButton from '../ButtonDefault/ButtonDefault';

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  padding: 0 4px;

  ${DefaultButton} {
    align-self: flex-end;
  }

  @media screen and (min-width: 640px) {
    padding: 0;
  }
`;

export default ContentArea;
