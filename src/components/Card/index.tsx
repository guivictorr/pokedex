import * as C from './styles';
import Button from '../Button';
import Heading from '../Heading/styles';
import Type from '../Type/styles';
import { useState } from 'react';

type CardProps = {
  name: string;
  image: string;
  id: number;
  type: string;
};

const Card = ({ id, image, name, type }: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <C.Container>
      <C.Content>
        <img src={image} alt={name} />
        <Heading level={1} fontWeight={600} fontSize="large">
          {name}
        </Heading>
        <span>ID: {id}</span>
        <div>
          <Type>{type}</Type>
        </div>
        <Button title="Ver detalhes" />
        <button onClick={() => setIsFavorite(!isFavorite)}>
          <img
            src={isFavorite ? '/heart.svg' : '/heart-outline.svg'}
            alt="Favoritar"
          />
        </button>
      </C.Content>
    </C.Container>
  );
};

export default Card;
