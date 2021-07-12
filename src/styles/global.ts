import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Poppins', sans-serif;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  input,textarea,button {
    font-family: 'Poppins', sans-serif;
  }
`;

export default Global;
