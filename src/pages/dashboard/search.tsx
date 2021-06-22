import { useState, ChangeEvent, KeyboardEvent } from 'react';
import PokemonProps from '../../@types/pokemon';
import { usePokemon } from '../../hooks/usePokemons';

import Card from '../../components/Card';
import Error from '../../components/Error/styles';
import Grid from '../../components/Grid/styles';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper/styles';

import * as S from '../../styles/pages/search';

const Search = () => {
  const [pokemon, setPokemon] = useState<PokemonProps>();
  const { pokemons } = usePokemon();
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

      const [filteredPokemon] = pokemons.filter(poke => poke.name === name);

      setPokemon(filteredPokemon);
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

            <Grid columns={4}>{pokemon && <Card pokemon={pokemon} />}</Grid>
          </S.Content>
        </Wrapper>
      </S.Container>
    </Layout>
  );
};

export default Search;
