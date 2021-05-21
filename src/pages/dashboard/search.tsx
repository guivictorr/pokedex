import { useState, ChangeEvent, KeyboardEvent } from 'react';
import PokemonProps from '../../@types/pokemon';
import Card from '../../components/Card';
import Error from '../../components/Error/styles';
import Grid from '../../components/Grid/styles';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper/styles';

import * as S from '../../styles/pages/search';
import fetchJson from '../../utils/fetchJson';

const Search = () => {
  const [pokemon, setPokemon] = useState<PokemonProps>();
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('');

  const getInputText = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const searchOnKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') getData(inputText);
  };

  const getData = async (name?: string) => {
    try {
      if (!inputText) {
        setError('Você precisa digitar o nome do pokémon');
        return;
      }

      const data = await fetchJson<PokemonProps>(`
      https://pokeapi.co/api/v2/pokemon/${name}`);

      if (!data) {
        setError('Não encontrei esse pokémon');
        return;
      }

      setPokemon(data);
      setError('');
    } catch (err) {
      setError('Não encontrei esse pokémon');
    } finally {
      setInputText('');
    }
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
                value={inputText}
                onChange={getInputText}
                onKeyPress={searchOnKeyPress}
              />
              <button onClick={() => getData(inputText)}>
                <img src="/search.svg" alt="Procurar" />
              </button>
            </div>
            {error && <Error>{error}</Error>}

            <Grid columns={4}>
              {pokemon && (
                <Card
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.front_default}
                  type={pokemon.types[0].type.name}
                />
              )}
            </Grid>
          </S.Content>
        </Wrapper>
      </S.Container>
    </Layout>
  );
};

export default Search;
