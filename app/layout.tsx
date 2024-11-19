import '@/shared/globals.css';

import clsx from 'clsx';

import { sora } from '@/shared/fonts';
import { ChildrenProperties } from '@/shared/types';

const RootLayout = ({ children }: ChildrenProperties) => {
  return (
    <html lang='cs'>
      <body
        className={clsx(
          sora.className,
          'flex min-h-screen flex-col overflow-x-hidden bg-neutral-950 antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
