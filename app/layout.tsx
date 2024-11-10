import '@/styles/globals.css';

import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='cs'>
      <body className='antialiased'>{children}</body>
    </html>
  );
};

export default RootLayout;
