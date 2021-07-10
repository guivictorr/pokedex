import { ChangeEvent, useState } from 'react';
import PokemonProps from '../../@types/pokemon';
import Card from '../../components/Card';
import Error from '../../components/Error/styles';
import Grid from '../../components/Grid/styles';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper/styles';
import useDebounce from '../../hooks/useDebounce';
import useFetch from '../../hooks/useFetch';

import * as S from '../../styles/pages/search';

const Search = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedValue = useDebounce(inputValue);

  const url = `${process.env.NEXT_PUBLIC_API_URL}/pokemon/${debouncedValue}`;
  const { result: pokemon, error } = useFetch<PokemonProps>(url);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Layout>
      <S.Container>
        <Wrapper maxWidth={100}>
          <S.Content>
            <div>
              <input
                type="text"
                placeholder="Procure por pokémons"
                onChange={handleInput}
              />
            </div>
            {error && <Error>Erro ao buscar pokemon</Error>}
            <Grid columns={4}>{pokemon && <Card pokemon={pokemon} />}</Grid>
          </S.Content>
        </Wrapper>
      </S.Container>
    </Layout>
  );
};

export default Search;
