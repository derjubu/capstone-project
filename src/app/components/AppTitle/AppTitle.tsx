import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type AppTitleProps = {
  children: ReactNode;
};

export default function AppTitle({ children }: AppTitleProps): JSX.Element {
  return <Apptitle>{children}</Apptitle>;
}

const Apptitle = styled.h1`
  text-align: center;
  justify-self: center;
  width: 100%;
  margin: 0;
  font-size: 3rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  color: var(--color-primary);
  background-color: var(--color-background-primary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 5px 5px;
`;
