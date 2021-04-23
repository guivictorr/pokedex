import styled, { css } from 'styled-components';

type GridProps = {
  columns: number;
};

const Grid = styled.section<GridProps>`
  margin-top: 50px;
  display: grid;
  gap: 35px;
  width: 100%;

  ${({ columns }) => css`
    grid-template-columns: repeat(${columns}, minmax(150px, 1fr));
  `}
`;

export default Grid;
