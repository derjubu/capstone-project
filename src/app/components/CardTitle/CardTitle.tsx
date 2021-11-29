import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type CardTitleProps = {
  children: ReactNode;
};

export default function CardTitle({ children }: CardTitleProps): JSX.Element {
  return <Cardtitle>{children}</Cardtitle>;
}

const Cardtitle = styled.h2`
  text-align: center;
  justify-self: center;
  grid-column: 1/-1;
  width: 100%;
  margin: 0;
  font-size: 2rem;
  color: var(--color-primary);
  background-color: var(--color-background-primary);
  margin-bottom: 0.5rem;
  padding: 0.5rem 0;
`;
