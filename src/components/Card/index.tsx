import Image from 'next/image';
import { StatKeys } from 'components/Statistic';
import { useModal } from '../../hooks/useModal';
import translateType from '../../utils/translateType';

import Button from '../Button';
import FavoriteButton from '../FavoriteButton';
import Heading from '../Heading/styles';
import Type, { PokemonTypes } from '../Type/styles';

import * as S from './styles';

export type CardProps = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
  };
  types: {
    type: {
      name: PokemonTypes;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: StatKeys;
      url: string;
    };
  }[];
  weight: number;
  height: number;
};

const Card = (pokemon: CardProps) => {
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
    <S.Container
      variants={variants}
      transition={{ damping: 0 }}
      layout
      layoutId={pokemon.name}
      initial="closed"
      animate="open"
      exit="exit"
    >
      <S.Content>
        {pokemon.sprites.front_default && (
          <S.ImageWrapper>
            <Image
              width={120}
              height={120}
              src={pokemon.sprites.front_default || '/placeholder.png'}
              alt={pokemon.name}
            />
          </S.ImageWrapper>
        )}
        <Heading level={1} fontWeight={600} fontSize="large">
          {pokemon.name}
        </Heading>
        <Heading level={2} fontWeight={500} fontSize="medium" color="gray200">
          ID: {pokemon.id}
        </Heading>
        <S.Row>
          {pokemon.types.map(({ type }) => (
            <Type key={type.name} type={type.name}>
              {translateType(type.name)}
            </Type>
          ))}
        </S.Row>
        <Button onClick={() => onOpen(pokemon)}>Ver detalhes</Button>
        <FavoriteButton {...pokemon} />
      </S.Content>
    </S.Container>
  );
};

export default Card;
