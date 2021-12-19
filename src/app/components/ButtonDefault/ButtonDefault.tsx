import React from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
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

export const ButtonDefaultInverted = styled(ButtonDefault)`
  border: 2px var(--color-secondary) solid;
  background: var(--color-background-secondary);
  color: var(--color-secondary);
`;

const ButtonText = styled(Link)`
  &:visited {
    text-decoration: none;
    color: var(--color-primary);
  }
`;

const ButtonTextSecondary = styled(Link)`
  &:visited {
    text-decoration: none;
    color: var(--color-secondary);
  }
`;

type ButtonNavigateProps = {
  children: ReactNode;
  link: string;
  onClick?: () => void;
};

export function ButtonNavigate({
  children,
  link,
  onClick,
}: ButtonNavigateProps): JSX.Element {
  return (
    <ButtonDefault>
      <ButtonText to={link} onClick={onClick}>
        {children}
      </ButtonText>
    </ButtonDefault>
  );
}

export function ButtonNavigateSecondary({
  children,
  link,
  onClick,
}: ButtonNavigateProps): JSX.Element {
  return (
    <ButtonDefaultInverted>
      <ButtonTextSecondary to={link} onClick={onClick}>
        {children}
      </ButtonTextSecondary>
    </ButtonDefaultInverted>
  );
}
