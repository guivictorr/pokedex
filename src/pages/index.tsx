import { GetServerSideProps } from 'next';
import { isUuid } from 'uuidv4';
import Header from '../components/Header';

import * as D from '../styles/pages/dashboard';

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { token } = ctx.req.cookies;

  if (!isUuid(token)) {
    return {
      redirect: {
        destination: '/login',
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
    <D.Container>
      <Header />
    </D.Container>
  );
};

export default DashBoard;
