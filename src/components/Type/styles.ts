import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

type PokemonTypes = keyof typeof theme.pokemonTypes;

type TypeProps = {
  size?: 'sm' | 'md';
  type: string;
};

const darkcolors = ['fighting', 'poison'];

const Type = styled.span<TypeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 500;
  background: ${({ theme, type }) => theme.pokemonTypes[type as PokemonTypes]};
  color: ${({ type }) => (darkcolors.includes(type) ? '#f5f5f5' : '#0a0a0a')};

  & + span {
    margin: 0 10px;
  }

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
