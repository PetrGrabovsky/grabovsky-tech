import '@/styles/globals.css';

import clsx from 'clsx';
import { ReactNode } from 'react';

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
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
