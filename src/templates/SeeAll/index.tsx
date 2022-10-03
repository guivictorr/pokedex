import { useEffect, useState } from 'react';

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

const url = 'https://pokeapi.co/api/v2/pokemon?limit=15';

const SeeAll = () => {
  const [pokemons, setPokemons] = useState<CardProps[]>([]);
  const { data } = useFetch<PokemonsByLimit>(url);
  const isLoading = !pokemons.length;

  useEffect(() => {
    const promises: Promise<CardProps>[] = [];

    if (data) {
      data.results.forEach(pokemon => {
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
  }, [data]);

  return (
    <Layout>
      <S.Container>
        {isLoading && (
          <div style={{ height: '90vh' }}>
            <Loading />
          </div>
        )}

        {!isLoading && (
          <>
            <div style={{ display: 'flex', gap: 36 }}>
              {/* <Input
                placeholder="Procure pelo o nome do pokemon"
                disabled={!data?.results.length}
              /> */}
              {/* <Pagination
                total={200}
                currentPage={5}
                perPage={15}
                onPageChange={() => console.log('cu')}
              /> */}
            </div>
            <Grid min="200px">
              {pokemons.map(pokemon => (
                <Card key={pokemon.id} {...pokemon} />
              ))}
            </Grid>
          </>
        )}
      </S.Container>
    </Layout>
  );
};

export default SeeAll;
