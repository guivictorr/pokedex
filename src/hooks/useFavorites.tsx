import { createContext, ReactNode, useContext, useState } from 'react';
import { CardProps } from '../components/Card';

type FavoritesProviderProps = {
  children: ReactNode;
};

type FavoritesContextProps = {
  addFavorite(pokemon: CardProps): void;
  checkIsFavorite(pokemon: CardProps): boolean;
  checkIsEmpty(): boolean;
  favorites: CardProps[];
};

const FavoritesContext = createContext({} as FavoritesContextProps);

const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setIsFavorites] = useState<CardProps[]>([]);

  const addFavorite = (pokemon: CardProps) => {
    if (!checkIsFavorite(pokemon)) {
      setIsFavorites([...favorites, pokemon]);
    } else {
      const index = favorites.findIndex(favorite => favorite.id === pokemon.id);
      favorites.splice(index, 1);
    }
  };

  const checkIsFavorite = (pokemon: CardProps) => {
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

export const useFavorites = () => useContext(FavoritesContext);

export default FavoritesProvider;
