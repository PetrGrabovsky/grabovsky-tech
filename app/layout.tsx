import '@/shared/globals.css';

import { ChildrenProperties } from '@/shared/types';

const RootLayout = ({ children }: ChildrenProperties) => {
  return (
    <html lang='cs'>
      <body className='antialiased'>{children}</body>
    </html>
  );
};

export default RootLayout;
