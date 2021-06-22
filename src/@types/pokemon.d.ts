type PokemonProps = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
  };
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
};

export default PokemonProps;
