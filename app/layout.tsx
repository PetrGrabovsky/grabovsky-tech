import '@/styles/globals.css';

import clsx from 'clsx';
import { ReactNode } from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import LayoutProvider from '@/providers/LayoutProvider';
import { inter } from '@/styles/fonts';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='cs'>
      <body
        className={clsx(
          inter.className,
          'flex min-h-screen flex-col overflow-x-hidden bg-bg-body',
          'text-text-primary antialiased'
        )}
      >
        <LayoutProvider>
          <Header />
          <main className='mb-8 mt-24 flex-grow'>{children}</main>
          <Footer />
        </LayoutProvider>
      </body>
    </html>
  );
};

export default RootLayout;
