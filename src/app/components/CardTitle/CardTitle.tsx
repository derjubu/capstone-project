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
  width: 100%;
  margin: 0;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
`;
