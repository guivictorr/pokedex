import * as C from './styles';
import Button from '../Button';
import Image from 'next/image';
import Heading from '../Heading/styles';
import Type from '../Type/styles';
import { useFavorites } from '../../hooks/useFavorites';
import { useState } from 'react';
import { usePalette } from 'react-palette';

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

  const { data } = usePalette(image);

  const addFavoritePokemon = () => {
    addFavorite(pokemon);
    setIsFavorite(!isFavorite);
  };

  return (
    <C.Container>
      <C.Content>
        <Image width={120} height={120} src={image} alt={name} />
        <Heading level={1} fontWeight={600} fontSize="large">
          {name}
        </Heading>
        <Heading level={2} fontWeight={500} fontSize="medium" color="grey200">
          ID: {id}
        </Heading>
        <div>
          <Type backgroundColor={data.lightVibrant}>{type}</Type>
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
