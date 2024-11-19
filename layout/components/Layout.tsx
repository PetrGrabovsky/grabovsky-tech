import { ChildrenProperties } from '@/shared/types';

const Layout = ({ children }: ChildrenProperties) => {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
