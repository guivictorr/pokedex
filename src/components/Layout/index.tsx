import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
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
    <AnimateSharedLayout type="crossfade">
      <Fragment>
        <Header />
        {children}
        <ScrollToTop />
        <AnimatePresence>{isOpen && <Modal />}</AnimatePresence>
      </Fragment>
    </AnimateSharedLayout>
  );
};

export default Layout;
