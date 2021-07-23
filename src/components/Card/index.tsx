import Image from 'next/image';
import { useState } from 'react';
import PokemonProps from '../../@types/pokemon';
import { useFavorites } from '../../hooks/useFavorites';
import { useModal } from '../../hooks/useModal';
import translateType from '../../utils/translateType';

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
  const [isFavorite, setIsFavorite] = useState(checkIsFavorite(pokemon));

  const addFavoritePokemon = () => {
    addFavorite(pokemon);
    setIsFavorite(!isFavorite);
  };

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
        <C.Row>
          {pokemon.types.map(({ type }) => (
            <Type key={type.name} type={type.name}>
              {translateType(type.name)}
            </Type>
          ))}
        </C.Row>
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
