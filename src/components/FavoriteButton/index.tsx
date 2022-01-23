import { useState } from 'react';

import * as F from './styles';
import { useFavorites } from '../../hooks/useFavorites';
import { CardProps } from 'components/Card';

const FavoriteButton = (pokemon: CardProps) => {
  const { checkIsFavorite, addFavorite } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(checkIsFavorite(pokemon.id));

  const addFavoritePokemon = () => {
    addFavorite(pokemon);
    setIsFavorite(!isFavorite);
  };

  return (
    <F.Container whileTap={{ scale: 0.5 }} onClick={addFavoritePokemon}>
      <img
        src={checkIsFavorite(pokemon.id) ? '/heart.svg' : '/heart-outline.svg'}
        alt={checkIsFavorite(pokemon.id) ? 'Remover de favoritos' : 'Favoritar'}
      />
    </F.Container>
  );
};

export default FavoriteButton;
