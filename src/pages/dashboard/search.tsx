import { GetServerSideProps } from 'next';
import { isUuid } from 'uuidv4';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper/styles';

import * as S from '../../styles/pages/search';

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
    <S.Container>
      <Header />
      <Wrapper maxWidth={100}>
        <S.Content>
          <div>
            <input type="text" placeholder="Procure por pokémons" />
            <button>
              <img src="/search.svg" alt="Procurar" />
            </button>
          </div>
        </S.Content>
      </Wrapper>
    </S.Container>
  );
};

export default DashBoard;
