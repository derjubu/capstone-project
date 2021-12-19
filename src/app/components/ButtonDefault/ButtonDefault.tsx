import styled from 'styled-components';

const ButtonDefault = styled.button`
  text-decoration: none;
  border: 2px var(--color-secondary) solid;
  border-radius: 4px;
  background: var(--color-background-primary);
  color: var(--color-primary);
  font-size: 1rem;
  padding: 0 4px;
  font-weight: bold;
  width: fit-content;
  min-height: 48px;
  min-width: 156px;
`;

export default ButtonDefault;

export const ButtonDefaultSimple = styled(ButtonDefault)`
  border: 2px var(--color-primary) solid;
  background: var(--color-background-secondary);
  color: var(--color-secondary);
  min-width: unset;
`;
