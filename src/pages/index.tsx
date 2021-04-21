import { FormEvent } from 'react';
import { useRouter } from 'next/router';
import * as L from '../styles/pages/login';

import Input from '../components/Input';
import Wrapper from '../components/Wrapper/styles';
import Heading from '../components/Heading/styles';
import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const { signIn, token } = useAuth();
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn();
    push('/dashboard');
  };

  if (token) {
    push('/dashboard');
  }

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
          <form onSubmit={handleSubmit}>
            <Input placeholder="Email" type="email" required />
            <Input placeholder="Senha" type="password" isPassword required />
            <Button title="Entrar" type="submit" />
          </form>
        </L.Content>
      </Wrapper>
    </L.Container>
  );
}
