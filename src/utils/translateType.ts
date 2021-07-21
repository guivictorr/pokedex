enum TypeTranslation {
  'fire' = 'fogo',
  'water' = 'água',
  'electric' = 'elétrico',
  'grass' = 'planta',
  'ice' = 'gelo',
  'fighting' = 'lutador',
  'poison' = 'venenoso',
  'ground' = 'terra',
  'flying' = 'voador',
  'psychic' = 'psíquico',
  'bug' = 'inseto',
  'rock' = 'rocha',
  'ghost' = 'fantasma',
  'dragon' = 'dragão',
  'dark' = 'noturno',
  'steel' = 'metálico',
  'fairy' = 'fada',
}

const translateType = (type: string): string => {
  return TypeTranslation[type as keyof typeof TypeTranslation] || type;
};

export default translateType;
