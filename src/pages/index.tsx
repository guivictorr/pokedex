import { GetServerSideProps } from 'next';
import { isUuid } from 'uuidv4';

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
  return <h1>DashBoard</h1>;
};

export default DashBoard;
