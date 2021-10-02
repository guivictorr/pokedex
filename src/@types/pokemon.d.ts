import { StatNames } from '../components/Statistic';

export type StatKeys = keyof typeof StatNames;

type Types = {
  type: {
    name: string;
    url: string;
  };
};

type Sprites = {
  front_default: string;
  back_default: string;
};

type Stats = {
  base_stat: number;
  effort: number;
  stat: {
    name: StatKeys;
    url: string;
  };
};

type PokemonProps = {
  id: number;
  name: string;
  sprites: Sprites;
  types: Types[];
  stats: Stats[];
  weight: number;
  height: number;
};

export type PokemonsByLimit = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export default PokemonProps;
