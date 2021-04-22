import { GetServerSideProps } from 'next';
import { isUuid } from 'uuidv4';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Heading from '../../components/Heading/styles';
import Link from '../../components/Link';
import Wrapper from '../../components/Wrapper/styles';

import * as F from '../../styles/pages/favorites';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { token } = ctx.req.cookies;

  if (!isUuid(token)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const DashBoard = () => {
  return (
    <F.Container>
      <Header />
      <Wrapper maxWidth={120}>
        <F.Content>
          <img src="/empty.svg" alt="Empty space" />
          <Heading fontWeight={600} fontSize="large" color="grey500">
            Está meio vazio por aqui!
          </Heading>
          <p>
            Procure por pokémons para adicioná-los aos seus <br /> favoritos.
          </p>
          <Link href="/dashboard/search">
            <Button title="Procurar pokémons" outlined />
          </Link>
        </F.Content>
      </Wrapper>
    </F.Container>
  );
};

export default DashBoard;
