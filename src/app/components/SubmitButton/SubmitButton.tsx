import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};
export default function SubmitButton({
  children,
  onClick,
}: ButtonProps): JSX.Element {
  return <Button onClick={onClick}>{children}</Button>;
}

const Button = styled.button`
  border: 2px #000fff solid;
  border-radius: 5px;
  background: var(--background-secondary);
  color: var(--font-secondary);
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  justify-self: center;
  grid-column: 3/5;
  margin: 1rem 0 0.5rem 0;
  padding: 0 1rem;
`;
