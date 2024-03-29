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
      color: ${theme.colors.gray300};
      margin-top: 10px;
    `}
  }

  a,
  button {
    max-width: 250px;
  }

  a {
    margin-top: 40px;
  }
`;
