import './globals.css';

import { ReactNode } from 'react';

interface RootLayoutProperties {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProperties) => {
  return (
    <html lang='cs'>
      <body className='antialiased'>{children}</body>
    </html>
  );
};

export default RootLayout;
