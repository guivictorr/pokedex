import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import FavoritesProvider from '../context/favoriteContext';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <FavoritesProvider>
        <Component {...pageProps} />
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default MyApp;
