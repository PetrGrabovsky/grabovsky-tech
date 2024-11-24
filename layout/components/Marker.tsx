import { RefObject } from 'react';

interface MarkerProperties {
  ref: RefObject<HTMLSpanElement>;
}

const Marker = ({ ref }: MarkerProperties) => {
  return <span ref={ref} aria-hidden='true' className='h-0 w-0' />;
};

export default Marker;
