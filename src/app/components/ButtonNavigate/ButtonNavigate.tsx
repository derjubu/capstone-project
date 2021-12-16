import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonDefault from '../ButtonDefault/ButtonDefault';

type ButtonNavigateProps = {
  children: ReactNode;
  link: string;
};

export default function ButtonNavigate({
  children,
  link,
}: ButtonNavigateProps): JSX.Element {
  return (
    <ButtonDefault>
      <ButtonText to={link}>{children}</ButtonText>
    </ButtonDefault>
  );
}

const ButtonText = styled(Link)`
  &:visited {
    text-decoration: none;
    color: var(--color-primary);
  }
`;
