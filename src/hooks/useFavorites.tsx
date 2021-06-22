import { useContext } from 'react';
import { FavoritesContext } from '../context/favoriteContext';

export const useFavorites = () => useContext(FavoritesContext);
