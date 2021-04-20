import * as L from '../styles/pages/login';

import Input from '../components/Input';
import Wrapper from '../components/Wrapper/styles';
import Heading from '../components/Heading/styles';
import Button from '../components/Button';

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
          <form>
            <Input placeholder="Email" />
            <Input placeholder="Senha" type="password" isPassword />
            <Button title="Entrar" type="submit" />
          </form>
        </L.Content>
      </Wrapper>
    </L.Container>
  );
}
