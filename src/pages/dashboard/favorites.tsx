import { useFavorites } from '../../hooks/useFavorites';

import Card from '../../components/Card';
import Empty from '../../components/Empty';
import Grid from '../../components/Grid/styles';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper/styles';

import * as F from '../../styles/pages/favorites';

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
            <Grid min="200px">
              {favorites.map(favorite => (
                <Card pokemon={favorite} key={favorite.id} />
              ))}
            </Grid>
          )}
        </Wrapper>
      </F.Container>
    </Layout>
  );
};

export default Favorites;
