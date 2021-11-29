import React, { ReactNode } from 'react';
import styled from 'styled-components';

type CardTitleProps = {
  children: ReactNode;
};

export default function CardTitle({ children }: CardTitleProps): JSX.Element {
  return <Cardtitle>{children}</Cardtitle>;
}

const Cardtitle = styled.h2`
  font-size: 1.5rem;
  color: white;
  background-color: var(--background1);
  text-align: center;
  justify-self: center;
  grid-column: 1/-1;
  margin: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
`;
