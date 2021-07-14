import { Fragment, ReactNode } from 'react';
import Header from '../Header';
import Modal from '../Modal';
import ScrollToTop from '../ScrollToTop';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Header />
      {children}
      <ScrollToTop />
      <Modal />
    </Fragment>
  );
};

export default Layout;
