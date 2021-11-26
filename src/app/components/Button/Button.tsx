import type { ReactNode } from 'react';
import React from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};
function Button({ children, onClick }: ButtonProps): JSX.Element {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
