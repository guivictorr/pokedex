import styled, { css } from 'styled-components';

const Container = styled.button`
  width: 100%;
  outline: transparent;
  border: none;
  border-radius: 8px;
  padding: 18px 26px;
  cursor: pointer;

  ${({ theme }) => css`
    background: ${theme.colors.primary};
    font-size: ${theme.fontSizes.medium};
    font-weight: 500;
  `}
`;

export default Container;
