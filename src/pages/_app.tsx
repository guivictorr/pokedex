import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import AuthProvider from '../hooks/useAuth';
import FavoritesProvider from '../hooks/useFavorites';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <AuthProvider>
        <FavoritesProvider>
          <Component {...pageProps} />
        </FavoritesProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
