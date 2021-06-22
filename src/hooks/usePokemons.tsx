import { useContext } from 'react';
import { PokemonContext } from '../context/pokemonContext';

export const usePokemon = () => useContext(PokemonContext);
