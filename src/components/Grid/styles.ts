import styled, { css } from 'styled-components';

type GridProps = {
  columns?: number | string;
  min?: string;
  max?: string;
};

const Grid = styled.section<GridProps>`
  margin-top: 50px;
  display: grid;
  gap: 35px;
  width: 100%;

  ${({ columns = 'auto-fill', min = '150px', max = '1fr' }) => css`
    grid-template-columns: repeat(${columns}, minmax(${min}, ${max}));
  `}
`;

export default Grid;
