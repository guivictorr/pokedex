import { useState, useCallback, useEffect } from 'react';

import fetchJson from '../../utils/fetchJson';
import PokemonProps from '../../@types/pokemon';

import Grid from '../../components/Grid/styles';
import Layout from '../../components/Layout';
import Card from '../../components/Card';

import * as S from '../../styles/pages/seeAll';
import Heading from '../../components/Heading/styles';

type ApiResult = {
  results: {
    name: string;
    url: string;
  }[];
};

const DashBoard = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=200';
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  const getData = useCallback(async () => {
    const { results } = await fetchJson<ApiResult>(url);

    for (const result of results) {
      const pokemon = await fetchJson<PokemonProps>(result.url);
      setPokemons(prevState => [...prevState, pokemon]);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

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
