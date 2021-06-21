import Wrapper from '../components/Wrapper/styles';
import Heading from '../components/Heading/styles';
import Button from '../components/Button';
import Link from '../components/Link';

import * as L from '../styles/pages/login';

export default function Login() {
  return (
    <L.Container>
      <Wrapper maxWidth={120}>
        <L.Content>
          <header>
            <img src="logo.svg" alt="Pokémon" />
          </header>
          <Heading level={1} fontSize="xlarge">
            Comece a coletar <br />
            pokémons!
          </Heading>

          <Link href="dashboard/favorites">
            <Button title="Entrar" type="submit" />
          </Link>
        </L.Content>
      </Wrapper>
    </L.Container>
  );
}
