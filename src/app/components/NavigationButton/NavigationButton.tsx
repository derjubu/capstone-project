import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationButton = styled(Link)`
  text-decoration: none;
  border: 2px var(--color-secondary) solid;
  border-radius: 5px;
  background: var(--color-background-secondary);
  color: var(--color-secondary);
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 1rem;
  display: block;
  width: fit-content;
`;

export default NavigationButton;
