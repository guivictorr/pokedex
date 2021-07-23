import Image from 'next/image';
import Link from '../Link';

import Button from '../Button';
import Heading from '../Heading/styles';

import { Container } from './styles';

const Empty = () => {
  return (
    <Container>
      <Image
        width={600}
        height={450}
        src="/empty.svg"
        alt="Astronauta em um espaço vazio"
      />
      <Heading level={2} fontWeight={600} fontSize="large" color="grey500">
        Está meio vazio por aqui!
      </Heading>
      <p>
        Procure por pokémons para adicioná-los aos seus <br /> favoritos.
      </p>
      <Link href="/dashboard/seeAll">
        <Button title="Procurar pokémons" outlined />
      </Link>
    </Container>
  );
};

export default Empty;
