import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

type PokemonTypes = keyof typeof theme.pokemonTypes;

type TypeProps = {
  size?: 'sm' | 'md';
  type: string;
};

const darkcolors = ['fighting', 'poison', 'dark'];

const Type = styled.span<TypeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 500;
  background: ${({ theme, type }) => theme.pokemonTypes[type as PokemonTypes]};
  color: ${({ type }) => (darkcolors.includes(type) ? '#f5f5f5' : '#0a0a0a')};
  transition: all 0.2s;
  font-size: ${theme.fontSizes.xsmall};

  &:hover {
    transform: scale(1.05);
    cursor: default;
  }

  & + span {
    margin: 0 10px;
  }

  ${({ size = 'sm' }) =>
    size === 'sm'
      ? css`
          padding: 4px 12px;
        `
      : css`
          padding: 6px 16px;
        `}
`;

export default Type;
