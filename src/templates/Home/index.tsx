import Link from 'next/link';

import Button from 'components/Button';
import Heading from 'components/Heading/styles';
import Wrapper from 'components/Wrapper/styles';

import * as S from './styles';

const Home = () => (
  <S.Container>
    <Wrapper maxWidth={120}>
      <S.Content>
        <header>
          <img src="logo.svg" alt="Pokémon" />
        </header>
        <Heading level={1} fontSize="xlarge">
          Comece a coletar <br />
          pokémons!
        </Heading>

        <Link href="/dashboard/favorites">
          <Button type="submit">Entrar</Button>
        </Link>
      </S.Content>
    </Wrapper>
  </S.Container>
);

export default Home;
