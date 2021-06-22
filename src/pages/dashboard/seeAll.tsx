import { usePokemon } from '../../hooks/usePokemons';

import Grid from '../../components/Grid/styles';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Heading from '../../components/Heading/styles';

import * as S from '../../styles/pages/seeAll';

const DashBoard = () => {
  const { pokemons } = usePokemon();

  return (
    <Layout>
      <S.Container>
        {pokemons.length < 20 ? (
          <S.Content>
            <Heading level={2} color="grey500" fontSize="xlarge">
              Loading {pokemons.length} pokemons...
            </Heading>
          </S.Content>
        ) : (
          <Grid min="200px">
            {pokemons.map(pokemon => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))}
          </Grid>
        )}
      </S.Container>
    </Layout>
  );
};

export default DashBoard;
