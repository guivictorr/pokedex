import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

type ButtonStyle = Pick<ButtonProps, 'bg' | 'outlined'>;

const Container = styled.button<ButtonStyle>`
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
  font-size: ${({ theme }) => theme.fontSizes.medium};

  ${({ outlined, theme, bg }) =>
    outlined
      ? css`
          background: transparent;
          border: 1px solid ${theme.colors.grey300};
          color: ${theme.colors.grey300};
        `
      : css`
          background: ${theme.colors[bg as keyof typeof theme.colors] ||
          theme.colors.primary};
        `}
`;

export default Container;
