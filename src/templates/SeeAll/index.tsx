import { useEffect, useRef, useState } from 'react';

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
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
  const { result } = useFetch<PokemonsByLimit>(url);
  const listBottom = useRef<HTMLLIElement>(null);

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

  useEffect(() => {
    setTimeout(() => {
      if (!listBottom.current) return;

      const intersectionObserver = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setOffset(prevState => prevState + 20);
        }
      });

      intersectionObserver.observe(listBottom.current);

      return () => intersectionObserver.disconnect();
    }, 1500);
  }, []);

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
            <S.ListBottom ref={listBottom} />
          </Grid>
        )}
      </S.Container>
    </Layout>
  );
};

export default SeeAll;
