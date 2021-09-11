import { ChangeEvent, useState } from 'react';
import PokemonProps from '../../@types/pokemon';
import Card from '../../components/Card';
import Grid from '../../components/Grid/styles';
import Input from '../../components/Input';
import Layout from '../../components/Layout';
import useDebounce from '../../hooks/useDebounce';
import useFetch from '../../hooks/useFetch';

import * as S from '../../styles/pages/seeAll';

const Search = () => {
  const [inputText, setInputText] = useState<string>('');
  const debouncedValue = useDebounce(inputText);
  const url = `https://pokeapi.co/api/v2/pokemon/${debouncedValue}`;
  const { result } = useFetch<PokemonProps>(url);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const pokeName = event.target.value.toLowerCase().trim();
    setInputText(pokeName || '');
  };

  return (
    <Layout>
      <S.Container>
        <Input placeholder="Procure pelo nome..." onChange={handleInput} />
        <Grid min="250px">
          {result && !('count' in result) && <Card {...result} />}
        </Grid>
      </S.Container>
    </Layout>
  );
};

export default Search;
