import { ChildrenProperties } from '@/shared/types';

import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ children }: ChildrenProperties) => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <main className='flex-grow'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
