import Grid from '../../components/Grid/styles';
import Layout from '../../components/Layout';
import Card from '../../components/Card';

import * as S from '../../styles/pages/seeAll';
import useFetch from '../../hooks/useFetch';
import PokemonProps, { PokemonsByLimit } from '../../@types/pokemon';
import { useState, useEffect, ChangeEvent } from 'react';
import fetchJson from '../../utils/fetchJson';
import useScroll from '../../hooks/useScroll';
import Input from '../../components/Input';

const DashBoard = () => {
  const [inputText, setInputText] = useState('');
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [limit, setLimit] = useState(25);
  const url = `${process.env.NEXT_PUBLIC_API_URL}?limit=150`;
  const { isPageEnd } = useScroll();
  const { result } = useFetch<PokemonsByLimit>(url);

  const handleInputText = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    setInputText(searchTerm);
  };

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
    if (isPageEnd && limit < 150) {
      setLimit(prevLimit => prevLimit + 25);
    }
  }, [isPageEnd, limit]);

  return (
    <Layout>
      <S.Container>
        <Input onChange={handleInputText} placeholder="Procure pelo nome..." />
        <Grid min="200px">
          {pokemons
            .filter(({ name }) => inputText === '' || name.includes(inputText))
            .slice(0, limit)
            .map(pokemon => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))}
        </Grid>
      </S.Container>
    </Layout>
  );
};

export default DashBoard;
