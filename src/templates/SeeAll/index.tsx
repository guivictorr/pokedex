import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import useFetch from 'hooks/useFetch';
import fetchJson from 'utils/fetchJson';

import Card, { CardProps } from 'components/Card';
import Grid from 'components/Grid/styles';
import Layout from 'components/Layout';
import Loading from 'components/Loading';

import * as S from './styles';

export type PokemonsByLimit = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

const SeeAll = () => {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState<CardProps[]>([]);
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=30`;
  const { result } = useFetch<PokemonsByLimit>(url);

  useEffect(() => {
    const promises: Promise<CardProps>[] = [];

    if (result) {
      result.results.forEach(pokemon => {
        const promise = fetchJson<CardProps>(pokemon.url);
        promises.push(promise);
      });
    }

    const handleSettledPromises = (
      pokemons: PromiseSettledResult<CardProps>[],
    ) => {
      pokemons.forEach(pokemon => {
        if (pokemon.status === 'fulfilled') {
          setPokemons(prevState => [...prevState, pokemon.value]);
        }
      });
    };

    Promise.allSettled(promises).then(handleSettledPromises);
  }, [result]);

  const getMorePokemons = () => {
    setOffset(prevState => prevState + 30);
  };

  return (
    <Layout>
      <S.Container>
        {!pokemons.length ? (
          <S.Content>
            <Loading />
          </S.Content>
        ) : (
          <InfiniteScroll
            dataLength={pokemons.length}
            hasMore={!!result?.next}
            next={getMorePokemons}
            loader={<Loading />}
            scrollThreshold={0.9}
          >
            <Grid min="200px">
              {pokemons.map(pokemon => (
                <Card key={pokemon.id} {...pokemon} />
              ))}
            </Grid>
          </InfiniteScroll>
        )}
      </S.Container>
    </Layout>
  );
};

export default SeeAll;
