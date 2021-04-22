import { GetServerSideProps } from 'next';
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { isUuid } from 'uuidv4';
import PokemonProps from '../../@types/pokemon';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper/styles';

import * as S from '../../styles/pages/search';
import fetchJson from '../../utils/fetchJson';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { token } = ctx.req.cookies;

  if (!isUuid(token)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const Search = () => {
  const [pokemon, setPokemon] = useState<PokemonProps>();
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('');

  const getInputText = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const searchOnKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      getData(inputText);
      setInputText('');
    }
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
      setInputText('');
    } catch (err) {
      setError('Não encontrei esse pokémon');
    }
  };

  return (
    <S.Container>
      <Header />
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
          {error && <p>{error}</p>}

          <section>
            {pokemon && (
              <Card
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                type={pokemon.types[0].type.name}
              />
            )}
          </section>
        </S.Content>
      </Wrapper>
    </S.Container>
  );
};

export default Search;
