import { Fragment, ReactNode } from 'react';
import Header from '../Header';
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
    </Fragment>
  );
};

export default Layout;
