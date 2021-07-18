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
    name: string;
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
  results: {
    name: string;
    url: string;
  }[];
};

export default PokemonProps;
