import Grid from '../../components/Grid/styles';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Heading from '../../components/Heading/styles';

import * as S from '../../styles/pages/seeAll';
import useFetch from '../../hooks/useFetch';
import PokemonProps, { PokemonsByLimit } from '../../@types/pokemon';
import { useState } from 'react';
import { useCallback } from 'react';
import fetchJson from '../../utils/fetchJson';
import { useEffect } from 'react';

const DashBoard = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const url = `${process.env.NEXT_PUBLIC_API_URL}pokemon?limit=150`;
  const { result, loading } = useFetch<PokemonsByLimit>(url);

  const handlePokemons = useCallback(async () => {
    result?.results.map(async item => {
      const response = await fetchJson<PokemonProps>(item.url);
      setPokemons(prevState => [...prevState, response]);
    });
  }, [result]);

  useEffect(() => {
    handlePokemons();
  }, [handlePokemons]);

  return (
    <Layout>
      <S.Container>
        {loading ? (
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
