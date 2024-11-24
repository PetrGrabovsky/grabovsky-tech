'use client';

import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import useLayoutManager from '../use-layout-manager';
import Footer from './Footer';
import Header from './Header';
import LinkedLogo from './LinkedLogo';
import Main from './Main';
import Marker from './Marker';
import MenuButton from './MenuButton';
import MobileNavContainer from './MobileNavContainer';

const Layout = ({ children }: PropsWithChildren) => {
  const { isMobile, isNavOpen, isShrunk, markerRef, toggleNavOpen } = useLayoutManager();

  return (
    <>
      <Marker ref={markerRef} />

      <Header className={clsx(isShrunk ? 'h-10 py-1' : 'h-16 py-2')}>
        <LinkedLogo />
        <MenuButton
          className={clsx(isShrunk ? 'py-0' : 'py-1')}
          isNavOpen={isNavOpen}
          onClick={toggleNavOpen}
        />
      </Header>

      {isMobile && (
        <MobileNavContainer
          className={clsx(
            isNavOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0',
            isShrunk ? 'top-10' : 'top-16'
          )}
        ></MobileNavContainer>
      )}

      <Main>{children}</Main>

      <Footer></Footer>
    </>
  );
};

export default Layout;
