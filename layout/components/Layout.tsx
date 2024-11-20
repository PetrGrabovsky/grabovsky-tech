'use client';

import { ChildrenProperties } from '@/shared/types';

import useLayoutManager from '../use-layout-manager';
import Footer from './Footer';
import Header from './Header';
import LinkedLogo from './LinkedLogo';
import MenuButton from './MenuButton';
import Navbar from './Navbar';

const Layout = ({ children }: ChildrenProperties) => {
  const { isMobile, isNavOpen, toggleNavOpen } = useLayoutManager();

  return (
    <>
      <Header>
        <Navbar>
          <LinkedLogo />
          {isMobile ? (
            <MenuButton isNavOpen={isNavOpen} onClick={toggleNavOpen} />
          ) : (
            <span className='text-gray-400'>Navigation</span>
          )}
        </Navbar>
      </Header>
      <main className='mb-8 mt-24 flex-grow'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
