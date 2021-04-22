import { createContext, ReactNode, useContext, useState } from 'react';

type FavoritesProviderProps = {
  children: ReactNode;
};

type FavoritesContextProps = {
  addFavorite(id: number): void;
  checkIsFavorite(id: number): boolean;
  checkIsEmpty(): boolean;
};

const FavoritesContext = createContext({} as FavoritesContextProps);

const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setIsFavorites] = useState<number[]>([]);

  const addFavorite = (id: number) => {
    if (!checkIsFavorite(id)) {
      setIsFavorites([...favorites, id]);
    } else {
      const index = favorites.findIndex(pokemonId => pokemonId === id);
      favorites.splice(index, 1);
    }
  };

  const checkIsFavorite = (id: number) => {
    return favorites.includes(id);
  };

  const checkIsEmpty = () => {
    return favorites.length === 0;
  };

  return (
    <FavoritesContext.Provider
      value={{ addFavorite, checkIsFavorite, checkIsEmpty }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);

export default FavoritesProvider;
