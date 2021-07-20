import { PaletteColors } from 'react-palette';
import styled, { css } from 'styled-components';

type TypeProps = {
  size?: 'sm' | 'md';
  backgroundColor: keyof PaletteColors | undefined;
};

const Type = styled.span<TypeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 500;
  background: ${({ backgroundColor = 'white' }) => backgroundColor};
  color: black;

  ${({ size = 'sm', theme }) =>
    size === 'sm'
      ? css`
          padding: 4px 12px;
        `
      : css`
          padding: 6px 16px;
          font-size: ${theme.fontSizes.xsmall};
        `}
`;

export default Type;
