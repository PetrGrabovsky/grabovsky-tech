import { PropsWithChildren } from 'react';

const Main = ({ children }: PropsWithChildren) => {
  return <main className='mb-12 mt-28 w-full flex-grow'>{children}</main>;
};

export default Main;
