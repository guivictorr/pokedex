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

  body,
  html {
    font-size: calc(16px + (19 - 16) * ((100vw - 320px) / (1920 - 320)));
    scroll-behavior: smooth;
  }

  input,textarea,button {
    font-family: 'Poppins', sans-serif;
  }
`;

export default Global;
