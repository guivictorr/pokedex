import { CardProps } from 'components/Card';
import { useCallback } from 'react';
import { createContext, ReactNode, useState } from 'react';

type ModalProviderProps = {
  children: ReactNode;
};

type ModalContextProps = {
  isOpen: boolean;
  payload: CardProps;
  onOpen: (payload: CardProps) => void;
  onClose: () => void;
};

export const ModalContext = createContext({} as ModalContextProps);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [payload, setPayload] = useState<CardProps>({} as CardProps);

  const onClose = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const onOpen = useCallback((payload: CardProps) => {
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
