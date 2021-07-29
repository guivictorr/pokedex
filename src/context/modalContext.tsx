import { useCallback } from 'react';
import { createContext, ReactNode, useState } from 'react';
import PokemonProps from '../@types/pokemon';

type ModalProviderProps = {
  children: ReactNode;
};

type ModalContextProps = {
  isOpen: boolean;
  payload: PokemonProps;
  onOpen: (payload: PokemonProps) => void;
  onClose: () => void;
};

export const ModalContext = createContext({} as ModalContextProps);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [payload, setPayload] = useState<PokemonProps>({} as PokemonProps);

  const onClose = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const onOpen = useCallback((payload: PokemonProps) => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    setPayload(payload);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, onClose, onOpen, payload }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
