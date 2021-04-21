import { createContext, ReactNode, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import cookie from 'js-cookie';

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextProps = {
  token: string;
  signIn(): void;
};

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string>(() => {
    const token = cookie.get('token');

    if (token) {
      return token;
    }

    return '';
  });

  const signIn = () => {
    const token = uuid();
    cookie.set('token', token);
    setUser(token);
  };

  return (
    <AuthContext.Provider value={{ token: user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
