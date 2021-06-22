import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import FavoritesProvider from '../context/favoriteContext';
import PokemonProvider from '../context/pokemonContext';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <PokemonProvider>
        <FavoritesProvider>
          <Component {...pageProps} />
        </FavoritesProvider>
      </PokemonProvider>
    </ThemeProvider>
  );
}

export default MyApp;
