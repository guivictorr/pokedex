import styled from 'styled-components';

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

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  & > div:nth-child(1) {
    align-self: center;
  }

  button {
    height: 32px;
    font-size: ${({ theme }) => theme.fontSizes.xsmall};

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

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;
