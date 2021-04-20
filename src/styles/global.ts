import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Global;
