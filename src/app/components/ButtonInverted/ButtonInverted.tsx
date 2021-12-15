import styled from 'styled-components';

const ButtonInverted = styled.button`
  text-decoration: none;
  border: 2px var(--color-secondary) solid;
  border-radius: 4px;
  background: var(--color-background-secondary);
  color: var(--color-secondary);
  font-size: 1rem;
  padding: 0 8px;
  font-weight: bold;
  width: fit-content;
  min-height: 48px;
`;

export default ButtonInverted;
