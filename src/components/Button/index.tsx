import { ButtonHTMLAttributes } from 'react';

import Container from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  outlined?: boolean;
};

const Button = ({ title, outlined, ...rest }: ButtonProps) => {
  return (
    <Container outlined={outlined} {...rest}>
      {title}
    </Container>
  );
};

export default Button;
