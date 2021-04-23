import styled, { css } from 'styled-components';

export const Container = styled.div``;
export const Content = styled.main`
  width: 100%;

  & > div {
    margin-top: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 8px;

    ${({ theme }) => css`
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.grey200};
    `}

    input {
      padding: 16px 20px;
      flex: 1;
      border: none;
      background: transparent;
      outline: transparent;
      font-size: ${({ theme }) => theme.fontSizes.small};
      font-weight: 600;

      &::placeholder {
        color: ${({ theme }) => theme.colors.grey500};
        font-weight: 400;
      }
    }

    button {
      width: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;
