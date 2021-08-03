import { useState, useEffect } from 'react';
import Grid from '../../components/Grid/styles';
import Layout from '../../components/Layout';
import Card from '../../components/Card';

import * as S from '../../styles/pages/seeAll';
import useFetch from '../../hooks/useFetch';
import PokemonProps, { PokemonsByLimit } from '../../@types/pokemon';
import fetchJson from '../../utils/fetchJson';
import Loading from '../../components/Loading';
import useScroll from '../../hooks/useScroll';

const DashBoard = () => {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const { isPageEnd } = useScroll();
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
  const { result } = useFetch<PokemonsByLimit>(url);

  useEffect(() => {
    const promises: Promise<PokemonProps>[] = [];

    if (result) {
      result.results.forEach(pokemon => {
        const promise = fetchJson<PokemonProps>(pokemon.url);
        promises.push(promise);
      });
    }

    const handleSettledPromises = (
      pokemons: PromiseSettledResult<PokemonProps>[],
    ) => {
      pokemons.forEach(pokemon => {
        if (pokemon.status === 'fulfilled') {
          setPokemons(prevState => [...prevState, pokemon.value]);
        }
      });
    };

    Promise.allSettled(promises).then(handleSettledPromises);
  }, [result]);

  useEffect(() => {
    if (isPageEnd) {
      setOffset(prevState => (prevState += 20));
    }
  }, [isPageEnd]);

  return (
    <Layout>
      <S.Container>
        {!pokemons.length ? (
          <S.Content>
            <Loading />
          </S.Content>
        ) : (
          <Grid min="200px">
            {pokemons.map(pokemon => (
              <Card key={pokemon.id} {...pokemon} />
            ))}
          </Grid>
        )}
      </S.Container>
    </Layout>
  );
};

export default DashBoard;
