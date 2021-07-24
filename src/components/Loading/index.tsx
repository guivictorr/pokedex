import Image from 'next/image';
import Heading from '../Heading/styles';
import * as L from './styles';

const Loading = () => (
  <L.Container>
    <Image alt="Pokebola" src="/pokeball.svg" width={100} height={100} />
    <Heading level={2} fontSize="xlarge">
      Carregando
    </Heading>
  </L.Container>
);

export default Loading;
