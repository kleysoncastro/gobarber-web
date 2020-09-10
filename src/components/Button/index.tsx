import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Input: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container>
    <button type="button" {...rest}>
      {children}
    </button>
  </Container>
);

export default Input;
