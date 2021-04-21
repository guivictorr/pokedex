import { createContext, ReactNode, useContext } from 'react';
import { uuid } from 'uuidv4';
import cookie from 'js-cookie';
import { useRouter } from 'next/dist/client/router';

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextProps = {
  signIn(): void;
  signOut(): void;
};

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { push } = useRouter();

  const signIn = () => {
    const token = uuid();
    cookie.set('token', token);
  };

  const signOut = () => {
    cookie.remove('token');
    push('/');
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
