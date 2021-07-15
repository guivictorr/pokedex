import { useCallback } from 'react';
import { createContext, ReactNode, useState } from 'react';

type ModalProviderProps = {
  children: ReactNode;
};

type ModalContextProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const ModalContext = createContext({} as ModalContextProps);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, onToggle }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
