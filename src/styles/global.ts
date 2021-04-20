import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    font-family: 'Poppins', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  input,textarea,button {
    font-family: 'Poppins', sans-serif;
  }
`;

export default Global;
