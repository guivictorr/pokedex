import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 90vh;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;

  img {
    width: 100%;
    max-width: 600px;
    height: auto;
  }

  p {
    ${({ theme }) => css`
      color: ${theme.colors.grey300};
      font-size: ${theme.fontSizes.small};
      margin-top: 10px;
    `}
  }

  a {
    width: 250px;
    margin-top: 40px;
  }
`;
