import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonNavigate = styled(Link)`
  text-decoration: none;
  border: 2px var(--color-secondary) solid;
  border-radius: 4px;
  background: var(--color-background-primary);
  color: var(--color-primary);
  font-size: 1rem;
  padding: 0 8px;
  font-weight: bold;
  width: fit-content;
  min-height: 48px;
`;

export default ButtonNavigate;
