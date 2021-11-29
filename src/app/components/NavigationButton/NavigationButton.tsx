import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type NavigationButtonProps = {
  onClick?: () => void;
  children: ReactNode;
};

export default function NavigationButton({
  children,
  onClick,
}: NavigationButtonProps): JSX.Element {
  return (
    <div>
      <Button onClick={onClick}>{children}</Button>
    </div>
  );
}

const Button = styled.span`
  border: 2px #000fff solid;
  border-radius: 5px;
  background: var(--background-secondary);
  color: var(--font-secondary);
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
  display: block;
  width: fit-content;
`;
