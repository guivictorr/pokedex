import * as C from './styles';
import Button from '../Button';
import Heading from '../Heading/styles';
import Type from '../Type/styles';
import { useFavorites } from '../../hooks/useFavorites';
import { useState } from 'react';

export type CardProps = {
  name: string;
  image: string;
  id: number;
  type: string;
};

const Card = (pokemon: CardProps) => {
  const { id, image, name, type } = pokemon;
  const { checkIsFavorite, addFavorite } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(checkIsFavorite(pokemon));

  const addFavoritePokemon = () => {
    addFavorite(pokemon);
    setIsFavorite(!isFavorite);
  };

  console.log(checkIsFavorite(pokemon));

  return (
    <C.Container>
      <C.Content>
        <img src={image} alt={name} />
        <Heading level={1} fontWeight={600} fontSize="large">
          {name}
        </Heading>
        <span>ID: {id}</span>
        <div>
          <Type>{type}</Type>
        </div>
        <Button title="Ver detalhes" />
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
