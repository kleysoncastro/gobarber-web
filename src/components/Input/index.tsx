import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
}

const Button: React.FC<InputProps> = props => (
  <Container>
    <input {...props} />
  </Container>
);

export default Button;
