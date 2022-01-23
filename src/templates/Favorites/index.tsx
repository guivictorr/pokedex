import { AnimatePresence } from 'framer-motion';

import { useFavorites } from 'hooks/useFavorites';

import Empty from 'components/Empty';
import Layout from 'components/Layout';
import Wrapper from 'components/Wrapper/styles';
import Grid from 'components/Grid/styles';
import Card from 'components/Card';

import * as S from './styles';

const Favorites = () => {
  const { checkIsEmpty, favorites } = useFavorites();
  const isEmpty = checkIsEmpty();

  return (
    <Layout>
      <S.Container>
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
      </S.Container>
    </Layout>
  );
};

export default Favorites;
