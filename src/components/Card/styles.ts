import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
  padding: 14px 10px;

  h1,
  div {
    text-transform: capitalize;
  }

  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  position: relative;

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    align-self: center;
  }

  span {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.small};
      color: ${theme.colors.grey300};
      opacity: 0.7;
      font-weight: 500;
    `}

    & + div {
      margin-top: 8px;
    }
  }

  button {
    height: 32px;
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    margin-top: 15px;

    &:last-child {
      position: absolute;
      top: 0;
      right: 0;
      background: transparent;
      outline: none;
      border: none;
      margin: 0;
      cursor: pointer;
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
`;
