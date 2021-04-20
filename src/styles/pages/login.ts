import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('/background.jpg') no-repeat;
  background-position: 100%;
  background-size: contain;
`;

export const Content = styled.main`
  header {
    padding-top: 33px;
    img {
      width: 206px;
      height: 76px;
    }
  }

  h1 {
    margin-top: 80px;
  }

  form {
    margin-top: 50px;
    max-width: 365px;

    div + div {
      margin-top: 15px;
    }

    button {
      margin-top: 33px;
    }
  }
`;
