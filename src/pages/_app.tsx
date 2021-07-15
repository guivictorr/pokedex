import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import FavoritesProvider from '../context/favoriteContext';
import ModalProvider from '../context/modalContext';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <ModalProvider>
        <FavoritesProvider>
          <Component {...pageProps} />
        </FavoritesProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
