import Image from 'next/image';
import PokemonProps from '../../@types/pokemon';
import { useModal } from '../../hooks/useModal';
import translateType from '../../utils/translateType';

import Button from '../Button';
import FavoriteButton from '../FavoriteButton';
import Heading from '../Heading/styles';
import Type from '../Type/styles';

import * as C from './styles';

const Card = (pokemon: PokemonProps) => {
  const { onOpen } = useModal();

  const variants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  return (
    <C.Container
      variants={variants}
      transition={{ damping: 0 }}
      layout
      layoutId={pokemon.name}
      initial="closed"
      animate="open"
      exit="exit"
    >
      <C.Content>
        <Image
          width={120}
          height={120}
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <Heading level={1} fontWeight={600} fontSize="large">
          {pokemon.name}
        </Heading>
        <Heading level={2} fontWeight={500} fontSize="medium" color="grey200">
          ID: {pokemon.id}
        </Heading>
        <C.Row>
          {pokemon.types.map(({ type }) => (
            <Type key={type.name} type={type.name}>
              {translateType(type.name)}
            </Type>
          ))}
        </C.Row>
        <Button title="Ver detalhes" onClick={() => onOpen(pokemon)} />
        <FavoriteButton {...pokemon} />
      </C.Content>
    </C.Container>
  );
};

export default Card;
