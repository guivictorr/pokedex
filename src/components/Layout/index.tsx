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
      {isOpen && <Modal />}
    </Fragment>
  );
};

export default Layout;
