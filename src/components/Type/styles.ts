import { PaletteColors } from 'react-palette';
import styled from 'styled-components';

type TypeProps = {
  backgroundColor: keyof PaletteColors | undefined;
};

const Type = styled.span<TypeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: auto;
  padding: 0 10px;
  height: 20px;
  font-weight: 500;
  background: ${({ backgroundColor = 'white' }) => backgroundColor};
  color: black;
  margin: 15px 0;
`;

export default Type;
