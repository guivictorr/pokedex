import NextLink, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

type MyLinkProps = LinkProps & {
  children: ReactNode;
};

const Link = ({ children, ...rest }: MyLinkProps) => {
  return (
    <NextLink {...rest}>
      <a>{children}</a>
    </NextLink>
  );
};

export default Link;
