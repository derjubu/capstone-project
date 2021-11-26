import React from 'react';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
};

export const Login = (): JSX.Element => (
  <Button
    onClick={function (): void {
      throw new Error('Function not implemented.');
    }}
  >
    Login
  </Button>
);
export const Register = (): JSX.Element => (
  <Button
    onClick={function (): void {
      throw new Error('Function not implemented.');
    }}
  >
    Register
  </Button>
);
