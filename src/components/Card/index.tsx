import Image from 'next/image';
import { useState } from 'react';
import { Palette } from 'react-palette';
import PokemonProps from '../../@types/pokemon';
import { useFavorites } from '../../hooks/useFavorites';
import { useModal } from '../../hooks/useModal';

import Button from '../Button';
import Heading from '../Heading/styles';
import Type from '../Type/styles';

import * as C from './styles';

type CardProps = {
  pokemon: PokemonProps;
};

const Card = ({ pokemon }: CardProps) => {
  const { checkIsFavorite, addFavorite } = useFavorites();
  const { onOpen } = useModal();
  const isNotPokemon = Object.keys(pokemon).includes('count');
  const [isFavorite, setIsFavorite] = useState(checkIsFavorite(pokemon));

  const addFavoritePokemon = () => {
    addFavorite(pokemon);
    setIsFavorite(!isFavorite);
  };

  // Gambiarra legal
  if (isNotPokemon) {
    return <></>;
  }

  return (
    <C.Container>
      <C.Content>
        <Image
          width={120}
          height={120}
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <Heading level={1} fontWeight={600} fontSize="large">
          {pokemon.name}
        </Heading>
        <Heading level={2} fontWeight={500} fontSize="medium" color="grey200">
          ID: {pokemon.id}
        </Heading>
        <div>
          <Palette src={pokemon.sprites.front_default}>
            {({ data }) => (
              <Type backgroundColor={data.lightVibrant}>
                {pokemon.types[0].type.name}
              </Type>
            )}
          </Palette>
        </div>
        <Button title="Ver detalhes" onClick={() => onOpen(pokemon)} />
        <button onClick={addFavoritePokemon}>
          <img
            src={checkIsFavorite(pokemon) ? '/heart.svg' : '/heart-outline.svg'}
            alt="Favoritar"
          />
        </button>
      </C.Content>
    </C.Container>
  );
};

export default Card;
