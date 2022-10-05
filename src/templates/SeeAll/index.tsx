import { useEffect, useState } from 'react';

import fetchJson from 'utils/fetchJson';

import Card, { CardProps } from 'components/Card';
import Grid from 'components/Grid/styles';
import Layout from 'components/Layout';
import Loading from 'components/Loading';

import * as S from './styles';
import { Pagination } from 'components/Pagination';

export type PokemonsByLimit = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

const limit = 14;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
const totalCount = 1000;

const SeeAll = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemons, setPokemons] = useState<CardProps[]>([]);
  const isLoading = !pokemons.length;

  useEffect(() => {
    setPokemons([]);

    const pokemons = fetchJson<PokemonsByLimit>(
      `${url}&offset=${currentPage * limit}`,
    );

    pokemons.then(data => {
      data.results.forEach(pokemon => {
        const promise = fetchJson<CardProps>(pokemon.url);
        promise.then(data => setPokemons(prevState => [...prevState, data]));
      });
    });
  }, [currentPage]);

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
              <Pagination
                total={totalCount}
                currentPage={currentPage}
                perPage={15}
                onPageChange={setCurrentPage}
              />
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
