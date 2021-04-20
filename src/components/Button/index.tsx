import { ButtonHTMLAttributes } from 'react';

import Container from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

const Button = ({ title, ...rest }: ButtonProps) => {
  return <Container {...rest}>{title}</Container>;
};

export default Button;
