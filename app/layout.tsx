import '@/shared/styles/globals.css';

import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import Layout from '@/layout/components/Layout';
import { sora } from '@/shared/styles/fonts';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang='cs'>
      <body
        className={clsx(
          'flex min-h-screen w-full flex-col overflow-x-hidden bg-neutral-950 antialiased',
          sora.className
        )}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
