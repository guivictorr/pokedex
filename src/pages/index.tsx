import * as L from '../styles/pages/login';

import Input from '../components/Input';
import Wrapper from '../components/Wrapper/styles';
import Heading from '../components/Heading/styles';
import Button from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { GetServerSideProps } from 'next';
import { isUuid } from 'uuidv4';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { token } = ctx.req.cookies;

  if (isUuid(token)) {
    return {
      redirect: {
        destination: '/dashboard/favorites',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default function Login() {
  const { signIn } = useAuth();

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
          <form onSubmit={signIn}>
            <Input placeholder="Email" type="email" required />
            <Input placeholder="Senha" type="password" isPassword required />
            <Button title="Entrar" type="submit" />
          </form>
        </L.Content>
      </Wrapper>
    </L.Container>
  );
}
