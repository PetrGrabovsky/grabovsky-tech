import '@/shared/styles/globals.css';

import clsx from 'clsx';

import Layout from '@/layout/components/Layout';
import { sora } from '@/shared/styles/fonts';
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
