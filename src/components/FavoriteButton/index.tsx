import { useState } from 'react';

import * as F from './styles';
import PokemonProps from '../../@types/pokemon';
import { useFavorites } from '../../hooks/useFavorites';

const FavoriteButton = (pokemon: PokemonProps) => {
  const { checkIsFavorite, addFavorite } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(checkIsFavorite(pokemon));

  const addFavoritePokemon = () => {
    addFavorite(pokemon);
    setIsFavorite(!isFavorite);
  };

  return (
    <F.Container whileTap={{ scale: 0.5 }} onClick={addFavoritePokemon}>
      <img
        src={checkIsFavorite(pokemon) ? '/heart.svg' : '/heart-outline.svg'}
        alt={checkIsFavorite(pokemon) ? 'Remover de favoritos' : 'Favoritar'}
      />
    </F.Container>
  );
};

export default FavoriteButton;
