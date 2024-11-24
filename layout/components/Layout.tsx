'use client';

import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import useLayoutManager from '../use-layout-manager';
import Footer from './Footer';
import Header from './Header';
import LinkedLogo from './LinkedLogo';
import Main from './Main';
import MenuButton from './MenuButton';
import MobileNavContainer from './MobileNavContainer';

const Layout = ({ children }: PropsWithChildren) => {
  const { isMobile, isNavOpen, toggleNavOpen } = useLayoutManager();

  return (
    <>
      <Header>
        <LinkedLogo />
        <MenuButton isNavOpen={isNavOpen} onClick={toggleNavOpen} />
      </Header>

      {isMobile && (
        <MobileNavContainer
          className={clsx(isNavOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0')}
        ></MobileNavContainer>
      )}

      <Main>{children}</Main>

      <Footer></Footer>
    </>
  );
};

export default Layout;
