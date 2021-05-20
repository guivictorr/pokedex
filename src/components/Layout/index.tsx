import { Container } from 'next/app';
import { ReactNode } from 'react';
import Header from '../Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
