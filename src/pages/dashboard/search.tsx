import { ChangeEvent, useState } from 'react';
import PokemonProps from '../../@types/pokemon';
import Card from '../../components/Card';
import Error from '../../components/Error/styles';
import Grid from '../../components/Grid/styles';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper/styles';
import useFetch from '../../hooks/useFetch';

import * as S from '../../styles/pages/search';

const Search = () => {
  const [inputValue, setInputValue] = useState<string>();
  const url = `${process.env.NEXT_PUBLIC_API_URL}pokemon/${inputValue}`;
  const { result: pokemon, loading, error } = useFetch<PokemonProps>(url);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setInputValue(event.target.value);
    }, 1000);
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
            <Grid columns={4}>
              {!loading && pokemon && <Card pokemon={pokemon} />}
            </Grid>
          </S.Content>
        </Wrapper>
      </S.Container>
    </Layout>
  );
};

export default Search;
