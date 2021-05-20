import { GetServerSideProps } from 'next';
import { isUuid } from 'uuidv4';
import Layout from '../../components/Layout';

import * as D from '../../styles/pages/dashboard';

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
    <Layout>
      <D.Container>
        <h1>seeAll</h1>
      </D.Container>
    </Layout>
  );
};

export default DashBoard;
