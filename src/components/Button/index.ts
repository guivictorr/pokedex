import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export type Variants = 'outlined' | 'danger' | 'default';

type ButtonStyle = {
  variant?: Variants;
};

const variants = {
  outlined: css`
    background-color: transparent;
    border: 1px solid ${theme.colors.grey300};
    color: ${theme.colors.grey300};
  `,
  danger: css`
    background-color: ${theme.colors.danger};
    color: ${theme.colors.white};
  `,
  default: css`
    background: ${theme.colors.primary};
    color: ${theme.colors.grey500};
  `,
};

const Button = styled.button<ButtonStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  outline: transparent;
  border: none;
  border-radius: 8px;
  padding: 18px 26px;
  cursor: pointer;
  font-weight: 500;
  font-size: ${theme.fontSizes.medium};

  ${({ variant = 'default' }) => variants[variant as Variants]}
`;

export default Button;
