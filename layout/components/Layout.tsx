import { ChildrenProperties } from '@/shared/types';

import Footer from './Footer';
import Header from './Header';
import LinkedLogo from './LinkedLogo';
import Navbar from './Navbar';

const Layout = ({ children }: ChildrenProperties) => {
  return (
    <>
      <Header>
        <Navbar>
          <LinkedLogo />
          <span>Menu</span>
        </Navbar>
      </Header>
      <main className='mb-8 mt-24 flex-grow'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
