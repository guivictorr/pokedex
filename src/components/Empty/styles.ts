import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;

  p {
    ${({ theme }) => css`
      color: ${theme.colors.grey300};
      font-size: ${theme.fontSizes.small};
      margin-top: 10px;
    `}
  }

  a,
  button {
    max-width: 250px;
    margin-top: 40px;
  }
`;
