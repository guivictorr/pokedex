import { GetServerSideProps } from 'next';
import { isUuid } from 'uuidv4';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Grid from '../../components/Grid/styles';
import Header from '../../components/Header';
import Heading from '../../components/Heading/styles';
import Link from '../../components/Link';
import Wrapper from '../../components/Wrapper/styles';
import { useFavorites } from '../../hooks/useFavorites';

import * as F from '../../styles/pages/favorites';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { token } = ctx.req.cookies;

  if (!isUuid(token)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const Favorites = () => {
  const { checkIsEmpty, favorites } = useFavorites();
  const isEmpty = checkIsEmpty();

  return (
    <F.Container>
      <Header />
      <Wrapper maxWidth={160}>
        <F.Content>
          {isEmpty ? (
            <>
              <img src="/empty.svg" alt="Empty space" />
              <Heading
                level={2}
                fontWeight={600}
                fontSize="large"
                color="grey500"
              >
                Está meio vazio por aqui!
              </Heading>
              <p>
                Procure por pokémons para adicioná-los aos seus <br />{' '}
                favoritos.
              </p>
              <Link href="/dashboard/search">
                <Button title="Procurar pokémons" outlined />
              </Link>
            </>
          ) : (
            <Grid columns={6}>
              {favorites.map(favorite => (
                <Card
                  id={favorite.id}
                  image={favorite.image}
                  name={favorite.name}
                  type={favorite.type}
                  key={favorite.id}
                />
              ))}
            </Grid>
          )}
        </F.Content>
      </Wrapper>
    </F.Container>
  );
};

export default Favorites;
