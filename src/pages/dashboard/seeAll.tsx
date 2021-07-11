import Grid from '../../components/Grid/styles';
import Layout from '../../components/Layout';
import Card from '../../components/Card';

import * as S from '../../styles/pages/seeAll';
import useFetch from '../../hooks/useFetch';
import PokemonProps, { PokemonsByLimit } from '../../@types/pokemon';
import { useState, useEffect } from 'react';
import { useCallback } from 'react';
import fetchJson from '../../utils/fetchJson';
import useScroll from '../../hooks/useScroll';

const DashBoard = () => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [limit, setLimit] = useState(25);
  const url = `${process.env.NEXT_PUBLIC_API_URL}?limit=150`;
  const { isPageEnd } = useScroll();
  const { result } = useFetch<PokemonsByLimit>(url);

  const handlePokemons = useCallback(async () => {
    if (result) {
      result.results.map(async item => {
        const response = await fetchJson<PokemonProps>(item.url);
        setPokemons(prevState => [...prevState, response]);
      });
    }
  }, [result]);

  useEffect(() => {
    handlePokemons();
  }, [handlePokemons]);

  useEffect(() => {
    if (isPageEnd && limit < 150) {
      setLimit(prevLimit => prevLimit + 25);
    }
  }, [isPageEnd, limit]);

  return (
    <Layout>
      <S.Container>
        <Grid min="200px">
          {pokemons.slice(0, limit).map(pokemon => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid>
      </S.Container>
    </Layout>
  );
};

export default DashBoard;
