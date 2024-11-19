import { ChildrenProperties } from '@/shared/types';

import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: ChildrenProperties) => {
  return (
    <>
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
