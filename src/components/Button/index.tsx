import { ButtonHTMLAttributes } from 'react';
import theme from '../../styles/theme';

import Container from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  outlined?: boolean;
  bg?: keyof typeof theme.colors;
};

const Button = ({ title, ...rest }: ButtonProps) => {
  return <Container {...rest}>{title}</Container>;
};

export default Button;
