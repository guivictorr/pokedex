import React, { useState, useEffect, useRef } from 'react';
import Grid from '../../components/Grid/styles';
import Layout from '../../components/Layout';
import Card from '../../components/Card';

import * as S from '../../styles/pages/seeAll';
import useFetch from '../../hooks/useFetch';
import PokemonProps, { PokemonsByLimit } from '../../@types/pokemon';
import fetchJson from '../../utils/fetchJson';
import Loading from '../../components/Loading';

const DashBoard = () => {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
  const { result } = useFetch<PokemonsByLimit>(url);
  const listBottom = useRef<HTMLLIElement>(null);

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

export default DashBoard;
