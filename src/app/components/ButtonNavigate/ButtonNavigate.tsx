import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonDefault from '../ButtonDefault/ButtonDefault';

type ButtonNavigateProps = {
  children: ReactNode;
  link: string;
  onClick?: () => void;
};

export default function ButtonNavigate({
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

const ButtonText = styled(Link)`
  &:visited {
    text-decoration: none;
    color: var(--color-primary);
  }
`;
