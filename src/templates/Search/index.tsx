import { ChangeEvent, useState } from 'react';

import useDebounce from 'hooks/useDebounce';
import useFetch from 'hooks/useFetch';

import Layout from 'components/Layout';
import Input from 'components/Input';
import Grid from 'components/Grid/styles';
import Card, { CardProps } from 'components/Card';

import * as S from './styles';

const Search = () => {
  const [inputText, setInputText] = useState<string>('');
  const debouncedValue = useDebounce(inputText);
  const url = `https://pokeapi.co/api/v2/pokemon/${debouncedValue}`;
  const { data } = useFetch<CardProps>(url);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const pokeName = event.target.value.toLowerCase().trim();
    setInputText(pokeName || '');
  };

  return (
    <Layout>
      <S.Container>
        <Input placeholder="Procure pelo nome..." onChange={handleInput} />
        <Grid min="250px">
          {data && !('count' in data) && <Card {...data} />}
        </Grid>
      </S.Container>
    </Layout>
  );
};

export default Search;
