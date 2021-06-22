import { createContext, ReactNode, useState } from 'react';
import PokemonProps from '../@types/pokemon';

type FavoritesProviderProps = {
  children: ReactNode;
};

type FavoritesContextProps = {
  addFavorite(pokemon: PokemonProps): void;
  checkIsFavorite(pokemon: PokemonProps): boolean;
  checkIsEmpty(): boolean;
  favorites: PokemonProps[];
};

export const FavoritesContext = createContext({} as FavoritesContextProps);

const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setIsFavorites] = useState<PokemonProps[]>([]);

  const addFavorite = (pokemon: PokemonProps) => {
    if (!checkIsFavorite(pokemon)) {
      setIsFavorites([...favorites, pokemon]);
    } else {
      const index = favorites.findIndex(favorite => favorite.id === pokemon.id);
      favorites.splice(index, 1);
      setIsFavorites([...favorites]);
    }
  };

  const checkIsFavorite = (pokemon: PokemonProps) => {
    return favorites.some(favorite => favorite.id === pokemon.id);
  };

  const checkIsEmpty = () => {
    return favorites.length === 0;
  };

  return (
    <FavoritesContext.Provider
      value={{ addFavorite, checkIsFavorite, checkIsEmpty, favorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
