import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('/background.png') no-repeat;
  background-position: 100%;
  background-size: contain;

  @media (max-width: 1245px) {
    background-size: cover;
  }

  @media (max-width: 500px) {
    background: none;
  }
`;

export const Content = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;

  button {
    margin-top: 30px;
    max-width: 20rem;
  }

  header {
    padding-top: 33px;
    img {
      width: 206px;
      height: 76px;
    }
  }

  h1 {
    margin-top: 80px;

    @media (max-width: 400px) {
      text-align: center;
      font-size: ${({ theme }) => theme.fontSizes.large};
    }
  }
`;
