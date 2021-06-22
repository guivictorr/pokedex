import {
  createContext,
  ReactNode,
  useCallback,
  useState,
  useEffect,
} from 'react';
import PokemonProps from '../@types/pokemon';
import fetchJson from '../utils/fetchJson';

type ApiResult = {
  results: {
    name: string;
    url: string;
  }[];
};

type PokemonProviderProps = {
  children: ReactNode;
};

type PokemonContextProps = {
  pokemons: PokemonProps[];
};

export const PokemonContext = createContext({} as PokemonContextProps);

const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';

  const getData = useCallback(async () => {
    const { results } = await fetchJson<ApiResult>(url);

    results.map(async ({ url }) => {
      const pokemon = await fetchJson<PokemonProps>(url);
      setPokemons(prevState => [...prevState, pokemon]);
    });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <PokemonContext.Provider value={{ pokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
