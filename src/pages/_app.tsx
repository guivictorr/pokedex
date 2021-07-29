import { AppProps } from 'next/app';
import { AnimateSharedLayout } from 'framer-motion';
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
          <AnimateSharedLayout type="crossfade">
            <Component {...pageProps} />
          </AnimateSharedLayout>
        </FavoritesProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
