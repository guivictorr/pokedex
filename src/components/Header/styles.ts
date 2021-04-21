import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  width: 100%;
  margin: 0 auto;

  img {
    width: 75px;
    height: 30px;
  }

  nav {
    display: flex;
    height: 100%;

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.grey500};
      font-size: ${({ theme }) => theme.fontSizes.medium};
      height: 100%;
    }

    input[type='radio']:checked + label {
      position: relative;
      font-weight: 600;

      &::before {
        content: '';
        background: ${({ theme }) => theme.colors.grey500};
        width: 100%;
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid ${({ theme }) => theme.colors.grey400};
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    border-radius: 8px;
    background: transparent;
    cursor: pointer;
    width: 90px;
    height: 30px;
    padding: 5px 10px;
    margin: 0;

    img {
      width: 15px;
      height: 15px;
    }
  }
`;
