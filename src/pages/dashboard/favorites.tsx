import { useFavorites } from '../../hooks/useFavorites';

import Card from '../../components/Card';
import Empty from '../../components/Empty';
import Grid from '../../components/Grid/styles';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper/styles';

import * as F from '../../styles/pages/favorites';
import { AnimatePresence } from 'framer-motion';

const Favorites = () => {
  const { checkIsEmpty, favorites } = useFavorites();
  const isEmpty = checkIsEmpty();

  return (
    <Layout>
      <F.Container>
        <Wrapper maxWidth={160}>
          {isEmpty ? (
            <Empty />
          ) : (
            <Grid layout min="200px">
              <AnimatePresence>
                {favorites.map(favorite => (
                  <Card {...favorite} key={favorite.id} />
                ))}
              </AnimatePresence>
            </Grid>
          )}
        </Wrapper>
      </F.Container>
    </Layout>
  );
};

export default Favorites;
