import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type ContentAreaProps = {
  children: ReactNode;
};

export default function ButtonNavigate({
  children,
}: ContentAreaProps): JSX.Element {
  return <ContentArea>{children}</ContentArea>;
}

const ContentArea = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
padding-left: 4px;
padding-right: 4px;
gap: 4px;
margin-top: 4px;
  }
`;
