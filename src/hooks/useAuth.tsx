import { createContext, ReactNode, useContext } from 'react';
import { uuid } from 'uuidv4';
import cookie from 'js-cookie';

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextProps = {
  signIn(): void;
};

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const signIn = () => {
    const token = uuid();
    cookie.set('token', token);
  };

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
