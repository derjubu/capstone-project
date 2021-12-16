import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type AppSubTitleProps = {
  children: ReactNode;
};

export default function AppSubTitle({
  children,
}: AppSubTitleProps): JSX.Element {
  return <Appsubtitle>{children}</Appsubtitle>;
}

const Appsubtitle = styled.h2`
  text-align: center;
  justify-self: center;
  width: 100%;
  margin: 0 0 4px 0;
  color: #000;
  font-size: 2rem;
  font-weight: normal;
  text-transform: uppercase;
  padding-top: 4px;
  padding-bottom: 4px;
`;
