import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

const DashBoard = () => {
  const { token } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (!token) {
      push('/');
    }
  }, [push, token]);

  return <h1>DashBoard</h1>;
};

export default DashBoard;
