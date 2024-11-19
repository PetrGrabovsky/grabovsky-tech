import { ChildrenProperties } from '@/shared/types';

import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ children }: ChildrenProperties) => {
  return (
    <>
      <Header>
        <Navbar>
          <span>Logo</span>
          <span>Menu</span>
        </Navbar>
      </Header>
      <main className='flex-grow'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
