import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    z-index: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    justify-content: center;
    img {
      display: none;
    }
  }

  img {
    width: 75px;
    height: 30px;
  }

  nav {
    display: flex;
    height: 100%;

    a:nth-child(1) > label > span {
      margin-left: 5px;
      background-color: black;
      color: white;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      display: flex;
      place-content: center;
      font-size: ${({ theme }) => theme.fontSizes.xsmall};
    }

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
    border: 1px solid ${({ theme }) => theme.colors.grey400};
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
