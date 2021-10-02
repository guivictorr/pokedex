import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { AnimateSharedLayout } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import FavoritesProvider from '../context/favoriteContext';
import ModalProvider from '../context/modalContext';
import theme from '../styles/theme';

const customRender = (children: ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <ModalProvider>
        <FavoritesProvider>
          <AnimateSharedLayout type="crossfade">{children}</AnimateSharedLayout>
        </FavoritesProvider>
      </ModalProvider>
    </ThemeProvider>,
  );
};

export default customRender;
