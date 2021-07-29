import { AnimatePresence } from 'framer-motion';
import { Fragment, ReactNode } from 'react';
import { useModal } from '../../hooks/useModal';
import Header from '../Header';
import Modal from '../Modal';
import ScrollToTop from '../ScrollToTop';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isOpen } = useModal();
  return (
    <Fragment>
      <Header />
      {children}
      <ScrollToTop />
      <AnimatePresence>{isOpen && <Modal />}</AnimatePresence>
    </Fragment>
  );
};

export default Layout;
